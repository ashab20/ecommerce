"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var react_rating_stars_component_1 = require("react-rating-stars-component");
var ProductReviews = function (_a) {
    var user = _a.user, rating = _a.rating, avatar = _a.avatar, comment = _a.comment;
    var stars = {
        edit: true,
        count: 5,
        activeColor: 'tomato',
        size: 24,
        isHalf: true,
        value: rating
    };
    return (react_1["default"].createElement("section", { className: 'product-reviews' },
        react_1["default"].createElement("img", { src: avatar, alt: user }),
        react_1["default"].createElement("h4", null, user),
        react_1["default"].createElement(react_rating_stars_component_1["default"], __assign({}, stars)),
        react_1["default"].createElement("span", null, comment),
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur earum commodi consequatur consequuntur sapiente? Praesentium iste harum libero, dolore beatae sapiente obcaecati eligendi? Quaerat modi adipisci quibusdam sequi accusantium pariatur."));
};
ProductReviews.defaultProps = {
    user: "User",
    comment: "",
    avatar: "https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png",
    rating: 3.4
};
exports["default"] = ProductReviews;
