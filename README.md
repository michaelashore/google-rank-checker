# Google Rank Checker

Checks positioning of a website for a specific search term in Google.

## Getting started

### Prerequisites

 * [Node.js](https://nodejs.org/en/)
 * [npm](https://www.npmjs.com/)
 * [ChromeDriver](https://sites.google.com/a/chromium.org/chromedriver/downloads)

### Installation

Clone the project:

```
git clone https://github.com/michaelashore/google-rank-checker.git
```

```
cd google-rank-checker
```

Install dependencies:

```
npm install
```

## Running the test

Enter test parameters in `index.js`:

```javascript
// Enter search term
searchTerm = 'github',
// Enter full or partial URL to find position of
searchWebsite = 'github.com',
```

Run test:

```
node index.js
```

Or:

```
npm test
```

The test will run and the results will output to the command line:

```
'https://github.com/' is approximately number 2 in Google when 'github' is the search term
```

## Author

* **Michael Shore** - *<hello@michael-shore.uk>* - *[michael-shore.uk](http://michael-shore.uk)*