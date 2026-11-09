# sucerquia.github.io

Source of my personal website: **<https://sucerquia.github.io>**

The site is built with [Jekyll](https://jekyllrb.com) and published by GitHub Pages on
every push to `main`. It does not depend on an external theme: layouts, styles and icons
all live in this repository.

## Where things live

| Content | File |
| --- | --- |
| Name, role, contact links, affiliations, menu | `_config.yml` |
| "About" text on the home page | `index.md` |
| Research cards on the home page | `_data/research.yml` |
| Publications | `_data/publications.yml` |
| Software & tutorials (home section and Software page) | `_data/software.yml` |
| Software logos and project images | `assets/img/software/` |
| Education, honors and scientific events (CV page) | `_data/education.yml`, `_data/honors.yml`, `_data/events.yml` |
| CV page structure and profile text | `cv.html` |
| Profile photo | `assets/img/profile.png` |
| Colors and fonts | top of `assets/css/style.css` |

**Adding a publication:** copy an entry in `_data/publications.yml` and edit it. The
`date` field (`"YYYY-MM-DD"`) sets the order, and the home page shows the three most
recent entries. Any author containing `Sucerquia` is shown in bold.

**Hiding or adding profile links:** fill in or empty `scholar`, `linkedin`, `orcid`, …
under `author:` in `_config.yml`.

## Preview locally

```bash
bundle install
bundle exec jekyll serve   # then open http://localhost:4000
```
