"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StylishhTooltip = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./index.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const StylishhTooltip = _ref => {
  let {
    id,
    mode,
    type,
    children,
    styledClass
  } = _ref;
  (0, _react.useEffect)(() => {
    let stylishTooltipElem = document.getElementById(id).getBoundingClientRect();
    let dropItem = document.getElementById("--stylish-tooltip-referral");
    const listener = event => {
      dropItem.style.display = "block";
      dropItem.style.x = stylishTooltipElem.x + "px";
      dropItem.style.y = stylishTooltipElem.y + "px";
      dropItem.style.zIndex = "9999999 !important";
    };
    const listenerRemove = () => {
      setTimeout(() => {
        dropItem.style.display = "none";
      }, [600]);
    };
    const element = document.getElementById(id);
    element.addEventListener("mouseover", listener);
    element.addEventListener("mouseleave", listenerRemove);
    return () => {
      element.removeEventListener("mouseover", listener);
      element.removeEventListener("mouseleave", listenerRemove);
    };
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "--stylish-tooltip-referral",
    className: "--stylish-custom-tooltip ".concat(mode, " ").concat(type, " ").concat(styledClass ? styledClass : "")
  }, children);
};
exports.StylishhTooltip = StylishhTooltip;