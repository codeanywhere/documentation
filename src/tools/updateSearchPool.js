var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var _this = this;
var fs = require('fs').promises;
var _a = require('lodash'), kebabCase = _a.kebabCase, flatten = _a.flatten;
var isSubsection = function (child) {
    return child.contents !== undefined;
};
var updateSearch = function () { return __awaiter(_this, void 0, void 0, function () {
    var sidebarAsString, sidebar, promisesArray, sectionsIndexHeadingsPromise, searchResults, sectionsIndexesSearchResults;
    var _this = this;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fs.readFile('./sidebar.json', 'utf-8')];
            case 1:
                sidebarAsString = _a.sent();
                sidebar = JSON.parse(sidebarAsString);
                promisesArray = sidebar.reduce(function (result, section) {
                    //map every section child (subsection or article) into a Promise that resolves to an array of search results
                    var sectionChildrenPromises = section.contents.map(function (child) { return __awaiter(_this, void 0, void 0, function () {
                        var subsection_1, subsectionChildrenPromises, subsectionSearchResults, flattendSubsectionSearchResults, contentsAsString, headingsArray;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!isSubsection(child)) return [3 /*break*/, 2];
                                    subsection_1 = child;
                                    subsectionChildrenPromises = subsection_1.contents.map(function (_a) {
                                        var name = _a.name, slug = _a.slug;
                                        return __awaiter(_this, void 0, void 0, function () {
                                            var contentsAsString, headingsArray;
                                            return __generator(this, function (_b) {
                                                switch (_b.label) {
                                                    case 0: return [4 /*yield*/, fs.readFile("src/docs/markdowns/" + section.slug + "/" + child.slug + "/" + slug + ".md", 'utf-8')
                                                        //find headings in article
                                                    ];
                                                    case 1:
                                                        contentsAsString = _b.sent();
                                                        headingsArray = (contentsAsString.match(/^###.+$/gm) || [])
                                                            .map(function (match) { return match.replace(/#\s?/g, ''); })
                                                            .map(function (heading) { return heading.replace(/\[/, ''); })
                                                            .map(function (heading) { return heading.replace(/\].+/, ''); })
                                                            .map(function (heading) { return heading.replace(/\*/g, ''); })
                                                            .map(function (heading) { return heading.replace(/_/g, ''); })
                                                            .map(function (heading) {
                                                            return heading.replace(/<\/?[^>]+(>|$)/g, '');
                                                        });
                                                        return [2 /*return*/, __spreadArray([
                                                                {
                                                                    section: section.name,
                                                                    subsection: subsection_1.name,
                                                                    article: name,
                                                                    heading: null,
                                                                    slug: section.slug + "/" + subsection_1.slug + "/" + slug
                                                                }
                                                            ], headingsArray.map(function (heading) { return ({
                                                                section: section.name,
                                                                subsection: subsection_1.name,
                                                                article: name,
                                                                heading: heading,
                                                                slug: section.slug + "/" + subsection_1.slug + "/" + slug + "#" + kebabCase(heading)
                                                            }); }))];
                                                }
                                            });
                                        });
                                    });
                                    return [4 /*yield*/, Promise.all(subsectionChildrenPromises)];
                                case 1:
                                    subsectionSearchResults = _a.sent();
                                    flattendSubsectionSearchResults = [].concat.apply([], subsectionSearchResults);
                                    return [2 /*return*/, flattendSubsectionSearchResults];
                                case 2: return [4 /*yield*/, fs.readFile("src/docs/markdowns/" + section.slug + "/" + child.slug + ".md", 'utf-8')
                                    //find headings in the article
                                ];
                                case 3:
                                    contentsAsString = _a.sent();
                                    headingsArray = (contentsAsString.match(/^###.+$/gm) || [])
                                        .map(function (match) { return match.replace(/#\s?/g, ''); })
                                        .map(function (heading) { return heading.replace(/\[/, ''); })
                                        .map(function (heading) { return heading.replace(/\].+/, ''); })
                                        .map(function (heading) { return heading.replace(/\*/g, ''); })
                                        .map(function (heading) { return heading.replace(/_/g, ''); })
                                        .map(function (heading) { return heading.replace(/<\/?[^>]+(>|$)/g, ''); });
                                    //article is mapped to a search results array
                                    return [2 /*return*/, __spreadArray([
                                            {
                                                section: section.name,
                                                subsection: null,
                                                article: child.name,
                                                heading: null,
                                                slug: section.slug + "/" + child.slug
                                            }
                                        ], headingsArray.map(function (heading) { return ({
                                            section: section.name,
                                            subsection: null,
                                            article: child.name,
                                            heading: heading,
                                            slug: section.slug + "/" + child.slug + "#" + kebabCase(heading)
                                        }); }))];
                            }
                        });
                    }); });
                    return __spreadArray(__spreadArray([], result), sectionChildrenPromises);
                }, []);
                return [4 /*yield*/, sidebar.reduce(function (result, section) { return __awaiter(_this, void 0, void 0, function () {
                        var contentsAsString, headingsArray, headingsResults, currentResult;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!!section.contents.length) return [3 /*break*/, 3];
                                    return [4 /*yield*/, fs.readFile("src/docs/markdowns/" + section.slug + "/index.md", 'utf-8')];
                                case 1:
                                    contentsAsString = _a.sent();
                                    headingsArray = (contentsAsString.match(/^###.+$/gm) || [])
                                        .map(function (match) { return match.replace(/#\s?/g, ''); })
                                        .map(function (heading) { return heading.replace(/\[/, ''); })
                                        .map(function (heading) { return heading.replace(/\].+/, ''); })
                                        .map(function (heading) { return heading.replace(/\*/g, ''); })
                                        .map(function (heading) { return heading.replace(/_/g, ''); })
                                        .map(function (heading) { return heading.replace(/<\/?[^>]+(>|$)/g, ''); });
                                    headingsResults = headingsArray.map(function (heading) { return ({
                                        section: section.name,
                                        subsection: null,
                                        article: null,
                                        heading: heading,
                                        slug: section.slug + "#" + kebabCase(heading)
                                    }); });
                                    return [4 /*yield*/, result];
                                case 2:
                                    currentResult = _a.sent();
                                    if (!currentResult)
                                        return [2 /*return*/, headingsResults];
                                    else {
                                        currentResult.push.apply(currentResult, headingsResults);
                                    }
                                    return [2 /*return*/, currentResult];
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); }, [])];
            case 2:
                sectionsIndexHeadingsPromise = _a.sent();
                return [4 /*yield*/, Promise.all(promisesArray)];
            case 3:
                searchResults = _a.sent();
                return [4 /*yield*/, sectionsIndexHeadingsPromise];
            case 4:
                sectionsIndexesSearchResults = _a.sent();
                searchResults.push.apply(searchResults, sectionsIndexesSearchResults);
                return [4 /*yield*/, fs.writeFile('src/public/searchResultsPool.json', JSON.stringify(flatten(searchResults), null, 2), 'utf-8')];
            case 5:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
updateSearch();
