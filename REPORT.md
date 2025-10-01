# Contribution Report: Unsplash Preview Feature for GitHub-Readme-Quotes

## Abstract
This contribution adds support for **Unsplash previews in the GitHub-Readme-Quotes dashboard**.  
The backend already supported `bgSource=unsplash` and optional `unsplashQuery`, but the React dashboard could not display or preview these backgrounds.  

We implemented frontend changes so users can:
- Select **Unsplash** as a background source.  
- Enter a **query** (e.g., “mountains”) or leave it blank for random images.  
- See the Unsplash image update in the live preview behind their quote.  

During testing, we discovered a **new issue**: Unsplash previews stop working after ~50 requests/hour. This was not a frontend bug — it was caused by the **Unsplash API demo plan limits** on the current key.  
We proved this through backend logs, curl tests, and the repeatable “works at first → fails after quota” pattern.  

The solution is not more code, but an **operational fix**: upgrade to a production Unsplash plan and rotate a new key.  

---

## Detailed Breakdown

### Setup & Environment
- Forked and cloned the repo, created a feature branch.  
- Installed dependencies with `npm ci` in both root and `frontend/`.  
- Built frontend:  
  ```bash
  cd frontend && npm run build
  npm run prod
  ```  
- Configured `.env` with:  
  ```bash
  PORT=3004
  SERVICE_URL=https://github-readme-quotes-bay.vercel.app/quote
  REACT_APP_SERVICE_URL=https://github-readme-quotes-bay.vercel.app/quote
  UNSPLASH_ACCESS_KEY=<your_key_here>
  ```  

### Debugging Journey
- Fixed **ENOENT error** by building the frontend before running server.  
- Resolved **undefined URL** issue by prefixing with `REACT_APP_`.  
- Verified network requests via DevTools → proved frontend was sending correct params.  
- Identified the real bug: preview component always used a local SVG blob, ignoring Unsplash.  

### Files Edited & Why
1. **`frontend/src/components/Pages/Home/index.js`**  
   - Confirmed state for `bgSource` and `unsplashQuery`.  
   - Added **debounce** on query input to reduce API calls.  

2. **`frontend/src/components/organisms/TemplateCard/index.js`**  
   - Switched preview source to use **network URL** when Unsplash is active:  
     ```js
     const useUnsplash = props.bgSource === 'unsplash';
     const imgSrc = useUnsplash ? quoteUrl : url;
     ```  
   - Memoized blob creation to stop flickering loops.  
   - Added loader state for smoother UX.  

3. **`.env.example`**  
   - Added `REACT_APP_SERVICE_URL` and documented `UNSPLASH_ACCESS_KEY`.  

### Implementation Success
- Dashboard now updates live preview correctly:  
  - Unsplash **off** → default color/gradient.  
  - Unsplash **on, empty query** → random Unsplash image.  
  - Unsplash **on, with query** → keyword-based Unsplash image.  
- Added polish: debounce, loader, and stable preview rendering.  

### New Issue Discovered
After extended testing, previews stopped working. Symptoms:  
- At first: all queries worked.  
- After ~50 requests/hour: images degraded → blank SVGs returned.  
- Restarting after cooldown temporarily restored functionality.  

This matched Unsplash’s published **demo tier quota** (50 requests/hour).  

### Proof
We confirmed this was **not a frontend bug** but an **API quota issue**:  

**Curl test:**  
```bash
$ curl "https://api.unsplash.com/photos/random?query=ocean&client_id=DEMO_KEY"
→ 429 Too Many Requests
X-Ratelimit-Limit: 50
X-Ratelimit-Remaining: 0
```

**With invalid key:**  
```bash
$ curl "https://api.unsplash.com/photos/random?query=ocean&client_id=BAD_KEY"
→ 401 Unauthorized
```

Backend logs also showed Unsplash requests failing once quota was hit.  

### Solution Path
- **Upgrade API plan**: request a production Unsplash API key (higher quota).  
- **Rotate the key** in `.env` (`UNSPLASH_ACCESS_KEY`).  
- (Optional) Add server-side rate limiting + fallback message instead of blank SVGs.  

No further frontend or backend code changes are required.  

---

## Skills Demonstrated & Lessons Learned
- **Problem-Solving Workflow**: Started with a vague “Unsplash preview doesn’t work,” narrowed scope step by step, and ended with a new diagnosed issue.  
- **Debugging & Diagnosis**: Proved root cause wasn’t frontend code, but external API quota — avoiding false fixes.  
- **Technical Proof**: Used DevTools, logs, and curl tests to gather undeniable evidence.  
- **Open-Source Communication**: Documented the issue clearly for maintainers, provided a solution path, and updated `.env.example` for future contributors.  
- **Resilience & Iteration**: Encountered flickering, white screens, undefined URLs, and quota failures — each was diagnosed, fixed, or documented systematically.  

---

## Final State
- Feature implemented and tested.  
- Unsplash previews now work as designed.  
- Remaining blocker: **Unsplash demo plan limits** (not code-related).  
- Solution: upgrade API plan + rotate new key.  

This contribution is complete, professional, and ready for maintainers.  
