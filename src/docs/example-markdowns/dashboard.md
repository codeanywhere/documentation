# Repls Dashboard

## Managing Your Repls

The repls dashboard is the place to manage and keep track of all your repls.  Repls are
listed in order of when they were created.  Each repl has its own three-dot menu at the
far right - bringing up this menu will allow you to:

* Edit the repl (change its name and description)
* View its history
* Fork the repl
* Pin it to your profile
* Toggle privacy settings (Subscribers only)

### Starring Repls

You can star a repl to mark it as a favorite.  Starred repls can be easily accessed by
clicking on the star slider at the top of your dashboard.  There is no limit to how many
repls are starred.  Only you can see which repls are starred; they will not appear in
your profile.

## Searching

### Basic Search

Typing keywords into the search bar will filter repls whose name or language
match any of the keywords (separated by spaces).

Repls only need to match one of the keywords or special filters
(language/title) in order to be included in the results.

Example:

**Search Query:** `draft repl python3`

**Returns:**
All repls that satisfy one or more of the following conditions:

* has `draft` in the title
* has `repl` in the title
* is a `python3` repl

### Search by Language

You can search for repls in a specific language by using the `language:` filter.
Typing in `language:` followed by the language you want to filter by will prompt
you with language suggestions.

Your search term will need to be the language name we use internally, which is why
we suggest selecting from the provided list.  For example, to search for all C++11
languages, you would search `language:cpp11`.  To search for HTML, CSS, JS repls,
you would search `language:html`.  This filter is case sensitive.

### Search by Title

Since plain searches include results with matching languages, you can search within repl
titles only using the `title:` filter.  Your search term may not include spaces.
This filter is case insensitive.

Example:

**Search Query:** `title:best project`

**Returns:**
Repls that satisfy one or more of the following conditions:

* has `best` in the title
* has `project` in the title
