"use strict";
exports.id = 4373;
exports.ids = [4373];
exports.modules = {

/***/ 74373:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  VY: () => (/* binding */ $cc7e05a45900e73f$export$7c6e2c02157bb7d2),
  ZA: () => (/* binding */ $cc7e05a45900e73f$export$eb2fcfdbd7ba97d4),
  JO: () => (/* binding */ $cc7e05a45900e73f$export$f04a61298a47a40f),
  ck: () => (/* binding */ $cc7e05a45900e73f$export$6d08773d2e66f8f2),
  wU: () => (/* binding */ $cc7e05a45900e73f$export$c3468e2714d175fa),
  eT: () => (/* binding */ $cc7e05a45900e73f$export$d6e5bf9c43ea9319),
  __: () => (/* binding */ $cc7e05a45900e73f$export$b04be29aa201d4f5),
  h_: () => (/* binding */ $cc7e05a45900e73f$export$602eac185826482c),
  fC: () => (/* binding */ $cc7e05a45900e73f$export$be92b6f5f03c0fe9),
  Z0: () => (/* binding */ $cc7e05a45900e73f$export$1ff3c3f08ae963c0),
  xz: () => (/* binding */ $cc7e05a45900e73f$export$41fb9f06171c75f4),
  B4: () => (/* binding */ $cc7e05a45900e73f$export$4c8d1a57a761ef94),
  l_: () => (/* binding */ $cc7e05a45900e73f$export$d5c6c08dc2d3ca7)
});

// UNUSED EXPORTS: Arrow, ScrollDownButton, ScrollUpButton, Select, SelectArrow, SelectContent, SelectGroup, SelectIcon, SelectItem, SelectItemIndicator, SelectItemText, SelectLabel, SelectPortal, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue, SelectViewport, createSelectScope

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(69885);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: external "next/dist/compiled/react-dom/server-rendering-stub"
var server_rendering_stub_ = __webpack_require__(98704);
;// CONCATENATED MODULE: ./node_modules/@radix-ui/number/dist/index.mjs
function $ae6933e535247d3d$export$7d15b64cf5a3a4c4(value, [min, max]) {
    return Math.min(max, Math.max(min, value));
}





//# sourceMappingURL=index.mjs.map

// EXTERNAL MODULE: ./node_modules/@radix-ui/primitive/dist/index.mjs
var dist = __webpack_require__(14958);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-context/dist/index.mjs
var react_context_dist = __webpack_require__(95866);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var react_compose_refs_dist = __webpack_require__(49837);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-slot/dist/index.mjs
var react_slot_dist = __webpack_require__(59818);
;// CONCATENATED MODULE: ./node_modules/@radix-ui/react-collection/dist/index.mjs









// We have resorted to returning slots directly rather than exposing primitives that can then
// be slotted like `<CollectionItem as={Slot}>…</CollectionItem>`.
// This is because we encountered issues with generic types that cannot be statically analysed
// due to creating them dynamically via createCollection.
function $e02a7d9cb1dc128c$export$c74125a8e3af6bb2(name) {
    /* -----------------------------------------------------------------------------------------------
   * CollectionProvider
   * ---------------------------------------------------------------------------------------------*/ const PROVIDER_NAME = name + 'CollectionProvider';
    const [createCollectionContext, createCollectionScope] = (0,react_context_dist/* createContextScope */.b)(PROVIDER_NAME);
    const [CollectionProviderImpl, useCollectionContext] = createCollectionContext(PROVIDER_NAME, {
        collectionRef: {
            current: null
        },
        itemMap: new Map()
    });
    const CollectionProvider = (props)=>{
        const { scope: scope , children: children  } = props;
        const ref = react_.useRef(null);
        const itemMap = react_.useRef(new Map()).current;
        return /*#__PURE__*/ react_.createElement(CollectionProviderImpl, {
            scope: scope,
            itemMap: itemMap,
            collectionRef: ref
        }, children);
    };
    /*#__PURE__*/ Object.assign(CollectionProvider, {
        displayName: PROVIDER_NAME
    });
    /* -----------------------------------------------------------------------------------------------
   * CollectionSlot
   * ---------------------------------------------------------------------------------------------*/ const COLLECTION_SLOT_NAME = name + 'CollectionSlot';
    const CollectionSlot = /*#__PURE__*/ react_.forwardRef((props, forwardedRef)=>{
        const { scope: scope , children: children  } = props;
        const context = useCollectionContext(COLLECTION_SLOT_NAME, scope);
        const composedRefs = (0,react_compose_refs_dist/* useComposedRefs */.e)(forwardedRef, context.collectionRef);
        return /*#__PURE__*/ react_.createElement(react_slot_dist/* Slot */.g7, {
            ref: composedRefs
        }, children);
    });
    /*#__PURE__*/ Object.assign(CollectionSlot, {
        displayName: COLLECTION_SLOT_NAME
    });
    /* -----------------------------------------------------------------------------------------------
   * CollectionItem
   * ---------------------------------------------------------------------------------------------*/ const ITEM_SLOT_NAME = name + 'CollectionItemSlot';
    const ITEM_DATA_ATTR = 'data-radix-collection-item';
    const CollectionItemSlot = /*#__PURE__*/ react_.forwardRef((props, forwardedRef)=>{
        const { scope: scope , children: children , ...itemData } = props;
        const ref = react_.useRef(null);
        const composedRefs = (0,react_compose_refs_dist/* useComposedRefs */.e)(forwardedRef, ref);
        const context = useCollectionContext(ITEM_SLOT_NAME, scope);
        react_.useEffect(()=>{
            context.itemMap.set(ref, {
                ref: ref,
                ...itemData
            });
            return ()=>void context.itemMap.delete(ref)
            ;
        });
        return /*#__PURE__*/ react_.createElement(react_slot_dist/* Slot */.g7, {
            [ITEM_DATA_ATTR]: '',
            ref: composedRefs
        }, children);
    });
    /*#__PURE__*/ Object.assign(CollectionItemSlot, {
        displayName: ITEM_SLOT_NAME
    });
    /* -----------------------------------------------------------------------------------------------
   * useCollection
   * ---------------------------------------------------------------------------------------------*/ function useCollection(scope) {
        const context = useCollectionContext(name + 'CollectionConsumer', scope);
        const getItems = react_.useCallback(()=>{
            const collectionNode = context.collectionRef.current;
            if (!collectionNode) return [];
            const orderedNodes = Array.from(collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`));
            const items = Array.from(context.itemMap.values());
            const orderedItems = items.sort((a, b)=>orderedNodes.indexOf(a.ref.current) - orderedNodes.indexOf(b.ref.current)
            );
            return orderedItems;
        }, [
            context.collectionRef,
            context.itemMap
        ]);
        return getItems;
    }
    return [
        {
            Provider: CollectionProvider,
            Slot: CollectionSlot,
            ItemSlot: CollectionItemSlot
        },
        useCollection,
        createCollectionScope
    ];
}





//# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ./node_modules/@radix-ui/react-direction/dist/index.mjs



const $f631663db3294ace$var$DirectionContext = /*#__PURE__*/ (0,react_.createContext)(undefined);
/* -------------------------------------------------------------------------------------------------
 * Direction
 * -----------------------------------------------------------------------------------------------*/ const $f631663db3294ace$export$c760c09fdd558351 = (props)=>{
    const { dir: dir , children: children  } = props;
    return /*#__PURE__*/ $7Gjcd$createElement($f631663db3294ace$var$DirectionContext.Provider, {
        value: dir
    }, children);
};
/* -----------------------------------------------------------------------------------------------*/ function $f631663db3294ace$export$b39126d51d94e6f3(localDir) {
    const globalDir = (0,react_.useContext)($f631663db3294ace$var$DirectionContext);
    return localDir || globalDir || 'ltr';
}
const $f631663db3294ace$export$2881499e37b75b9a = (/* unused pure expression or super */ null && ($f631663db3294ace$export$c760c09fdd558351));





//# sourceMappingURL=index.mjs.map

// EXTERNAL MODULE: ./node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs + 1 modules
var react_dismissable_layer_dist = __webpack_require__(85009);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-focus-guards/dist/index.mjs
var react_focus_guards_dist = __webpack_require__(80573);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-focus-scope/dist/index.mjs
var react_focus_scope_dist = __webpack_require__(69586);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-id/dist/index.mjs
var react_id_dist = __webpack_require__(81042);
;// CONCATENATED MODULE: ./node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function getAlignment(placement) {
  return placement.split('-')[1];
}

function getLengthFromAxis(axis) {
  return axis === 'y' ? 'height' : 'width';
}

function getSide(placement) {
  return placement.split('-')[0];
}

function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].includes(getSide(placement)) ? 'x' : 'y';
}

function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const mainAxis = getMainAxisFromPlacement(placement);
  const length = getLengthFromAxis(mainAxis);
  const commonAlign = reference[length] / 2 - floating[length] / 2;
  const side = getSide(placement);
  const isVertical = mainAxis === 'x';
  let coords;
  switch (side) {
    case 'top':
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case 'bottom':
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case 'right':
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case 'left':
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case 'start':
      coords[mainAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case 'end':
      coords[mainAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a reference element when it is given a certain positioning strategy.
 *
 * This export does not have any `platform` interface logic. You will need to
 * write one for the platform you are using Floating UI with.
 */
const computePosition = async (reference, floating, config) => {
  const {
    placement = 'bottom',
    strategy = 'absolute',
    middleware = [],
    platform
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
  let rects = await platform.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === 'object') {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
      continue;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};

function evaluate(value, param) {
  return typeof value === 'function' ? value(param) : value;
}

function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}

function getSideObjectFromPadding(padding) {
  return typeof padding !== 'number' ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}

function rectToClientRect(rect) {
  return {
    ...rect,
    top: rect.y,
    left: rect.x,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  };
}

/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = 'clippingAncestors',
    rootBoundary = 'viewport',
    elementContext = 'floating',
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getSideObjectFromPadding(padding);
  const altContext = elementContext === 'floating' ? 'reference' : 'floating';
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform.getClippingRect({
    element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || (await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating))),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === 'floating' ? {
    ...rects.floating,
    x,
    y
  } : rects.reference;
  const offsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating));
  const offsetScale = (await (platform.isElement == null ? void 0 : platform.isElement(offsetParent))) ? (await (platform.getScale == null ? void 0 : platform.getScale(offsetParent))) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}

const min = Math.min;
const max = Math.max;

function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}

/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */
const arrow = options => ({
  name: 'arrow',
  options,
  async fn(state) {
    const {
      x,
      y,
      placement,
      rects,
      platform,
      elements
    } = state;
    // Since `element` is required, we don't Partial<> the type.
    const {
      element,
      padding = 0
    } = evaluate(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = getSideObjectFromPadding(padding);
    const coords = {
      x,
      y
    };
    const axis = getMainAxisFromPlacement(placement);
    const length = getLengthFromAxis(axis);
    const arrowDimensions = await platform.getDimensions(element);
    const isYAxis = axis === 'y';
    const minProp = isYAxis ? 'top' : 'left';
    const maxProp = isYAxis ? 'bottom' : 'right';
    const clientProp = isYAxis ? 'clientHeight' : 'clientWidth';
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;

    // DOM platform can return `window` as the `offsetParent`.
    if (!clientSize || !(await (platform.isElement == null ? void 0 : platform.isElement(arrowOffsetParent)))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;

    // If the padding is large enough that it causes the arrow to no longer be
    // centered, modify the padding so that it is centered.
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);

    // Make sure the arrow doesn't overflow the floating element if the center
    // point is outside the floating element's bounds.
    const min$1 = minPadding;
    const max = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset = within(min$1, center, max);

    // If the reference is small enough that the arrow's padding causes it to
    // to point to nothing for an aligned placement, adjust the offset of the
    // floating element itself. This stops `shift()` from taking action, but can
    // be worked around by calling it again after the `arrow()` if desired.
    const shouldAddOffset = getAlignment(placement) != null && center != offset && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? min$1 - center : max - center : 0;
    return {
      [axis]: coords[axis] - alignmentOffset,
      data: {
        [axis]: offset,
        centerOffset: center - offset + alignmentOffset
      }
    };
  }
});

const sides = ['top', 'right', 'bottom', 'left'];
const allPlacements = /*#__PURE__*/(/* unused pure expression or super */ null && (sides.reduce((acc, side) => acc.concat(side, side + "-start", side + "-end"), [])));

const oppositeSideMap = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, side => oppositeSideMap[side]);
}

function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const mainAxis = getMainAxisFromPlacement(placement);
  const length = getLengthFromAxis(mainAxis);
  let mainAlignmentSide = mainAxis === 'x' ? alignment === (rtl ? 'end' : 'start') ? 'right' : 'left' : alignment === 'start' ? 'bottom' : 'top';
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return {
    main: mainAlignmentSide,
    cross: getOppositePlacement(mainAlignmentSide)
  };
}

const oppositeAlignmentMap = {
  start: 'end',
  end: 'start'
};
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, alignment => oppositeAlignmentMap[alignment]);
}

function getPlacementList(alignment, autoAlignment, allowedPlacements) {
  const allowedPlacementsSortedByAlignment = alignment ? [...allowedPlacements.filter(placement => getAlignment(placement) === alignment), ...allowedPlacements.filter(placement => getAlignment(placement) !== alignment)] : allowedPlacements.filter(placement => getSide(placement) === placement);
  return allowedPlacementsSortedByAlignment.filter(placement => {
    if (alignment) {
      return getAlignment(placement) === alignment || (autoAlignment ? getOppositeAlignmentPlacement(placement) !== placement : false);
    }
    return true;
  });
}
/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */
const autoPlacement = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'autoPlacement',
    options,
    async fn(state) {
      var _middlewareData$autoP, _middlewareData$autoP2, _placementsThatFitOnE;
      const {
        rects,
        middlewareData,
        placement,
        platform,
        elements
      } = state;
      const {
        crossAxis = false,
        alignment,
        allowedPlacements = allPlacements,
        autoAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      const placements = alignment !== undefined || allowedPlacements === allPlacements ? getPlacementList(alignment || null, autoAlignment, allowedPlacements) : allowedPlacements;
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const currentIndex = ((_middlewareData$autoP = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP.index) || 0;
      const currentPlacement = placements[currentIndex];
      if (currentPlacement == null) {
        return {};
      }
      const {
        main,
        cross
      } = getAlignmentSides(currentPlacement, rects, await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)));

      // Make `computeCoords` start from the right place.
      if (placement !== currentPlacement) {
        return {
          reset: {
            placement: placements[0]
          }
        };
      }
      const currentOverflows = [overflow[getSide(currentPlacement)], overflow[main], overflow[cross]];
      const allOverflows = [...(((_middlewareData$autoP2 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP2.overflows) || []), {
        placement: currentPlacement,
        overflows: currentOverflows
      }];
      const nextPlacement = placements[currentIndex + 1];

      // There are more placements to check.
      if (nextPlacement) {
        return {
          data: {
            index: currentIndex + 1,
            overflows: allOverflows
          },
          reset: {
            placement: nextPlacement
          }
        };
      }
      const placementsSortedByMostSpace = allOverflows.map(d => {
        const alignment = getAlignment(d.placement);
        return [d.placement, alignment && crossAxis ?
        // Check along the mainAxis and main crossAxis side.
        d.overflows.slice(0, 2).reduce((acc, v) => acc + v, 0) :
        // Check only the mainAxis.
        d.overflows[0], d.overflows];
      }).sort((a, b) => a[1] - b[1]);
      const placementsThatFitOnEachSide = placementsSortedByMostSpace.filter(d => d[2].slice(0,
      // Aligned placements should not check their opposite crossAxis
      // side.
      getAlignment(d[0]) ? 2 : 3).every(v => v <= 0));
      const resetPlacement = ((_placementsThatFitOnE = placementsThatFitOnEachSide[0]) == null ? void 0 : _placementsThatFitOnE[0]) || placementsSortedByMostSpace[0][0];
      if (resetPlacement !== placement) {
        return {
          data: {
            index: currentIndex + 1,
            overflows: allOverflows
          },
          reset: {
            placement: resetPlacement
          }
        };
      }
      return {};
    }
  };
};

function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}

function getSideList(side, isStart, rtl) {
  const lr = ['left', 'right'];
  const rl = ['right', 'left'];
  const tb = ['top', 'bottom'];
  const bt = ['bottom', 'top'];
  switch (side) {
    case 'top':
    case 'bottom':
      if (rtl) return isStart ? rl : lr;
      return isStart ? lr : rl;
    case 'left':
    case 'right':
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === 'start', rtl);
  if (alignment) {
    list = list.map(side => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}

/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */
const flip = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'flip',
    options,
    async fn(state) {
      var _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = 'bestFit',
        fallbackAxisSideDirection = 'none',
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      const side = getSide(placement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== 'none') {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const {
          main,
          cross
        } = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[main], overflow[cross]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];

      // One or more sides is overflowing.
      if (!overflows.every(side => side <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements[nextIndex];
        if (nextPlacement) {
          // Try next placement and re-run the lifecycle.
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }

        // First, find the candidates that fit on the mainAxis side of overflow,
        // then find the placement that fits the best on the main crossAxis side.
        let resetPlacement = (_overflowsData$filter = overflowsData.filter(d => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;

        // Otherwise fallback.
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case 'bestFit':
              {
                var _overflowsData$map$so;
                const placement = (_overflowsData$map$so = overflowsData.map(d => [d.placement, d.overflows.filter(overflow => overflow > 0).reduce((acc, overflow) => acc + overflow, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$map$so[0];
                if (placement) {
                  resetPlacement = placement;
                }
                break;
              }
            case 'initialPlacement':
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};

function getSideOffsets(overflow, rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  };
}
function isAnySideFullyClipped(overflow) {
  return sides.some(side => overflow[side] >= 0);
}
/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */
const hide = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'hide',
    options,
    async fn(state) {
      const {
        rects
      } = state;
      const {
        strategy = 'referenceHidden',
        ...detectOverflowOptions
      } = evaluate(options, state);
      switch (strategy) {
        case 'referenceHidden':
          {
            const overflow = await detectOverflow(state, {
              ...detectOverflowOptions,
              elementContext: 'reference'
            });
            const offsets = getSideOffsets(overflow, rects.reference);
            return {
              data: {
                referenceHiddenOffsets: offsets,
                referenceHidden: isAnySideFullyClipped(offsets)
              }
            };
          }
        case 'escaped':
          {
            const overflow = await detectOverflow(state, {
              ...detectOverflowOptions,
              altBoundary: true
            });
            const offsets = getSideOffsets(overflow, rects.floating);
            return {
              data: {
                escapedOffsets: offsets,
                escaped: isAnySideFullyClipped(offsets)
              }
            };
          }
        default:
          {
            return {};
          }
      }
    }
  };
};

function getBoundingRect(rects) {
  const minX = min(...rects.map(rect => rect.left));
  const minY = min(...rects.map(rect => rect.top));
  const maxX = max(...rects.map(rect => rect.right));
  const maxY = max(...rects.map(rect => rect.bottom));
  return {
    x: minX,
    y: minY,
    width: maxX - minX,
    height: maxY - minY
  };
}
function getRectsByLine(rects) {
  const sortedRects = rects.slice().sort((a, b) => a.y - b.y);
  const groups = [];
  let prevRect = null;
  for (let i = 0; i < sortedRects.length; i++) {
    const rect = sortedRects[i];
    if (!prevRect || rect.y - prevRect.y > prevRect.height / 2) {
      groups.push([rect]);
    } else {
      groups[groups.length - 1].push(rect);
    }
    prevRect = rect;
  }
  return groups.map(rect => rectToClientRect(getBoundingRect(rect)));
}
/**
 * Provides improved positioning for inline reference elements that can span
 * over multiple lines, such as hyperlinks or range selections.
 * @see https://floating-ui.com/docs/inline
 */
const inline = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'inline',
    options,
    async fn(state) {
      const {
        placement,
        elements,
        rects,
        platform,
        strategy
      } = state;
      // A MouseEvent's client{X,Y} coords can be up to 2 pixels off a
      // ClientRect's bounds, despite the event listener being triggered. A
      // padding of 2 seems to handle this issue.
      const {
        padding = 2,
        x,
        y
      } = evaluate(options, state);
      const nativeClientRects = Array.from((await (platform.getClientRects == null ? void 0 : platform.getClientRects(elements.reference))) || []);
      const clientRects = getRectsByLine(nativeClientRects);
      const fallback = rectToClientRect(getBoundingRect(nativeClientRects));
      const paddingObject = getSideObjectFromPadding(padding);
      function getBoundingClientRect() {
        // There are two rects and they are disjoined.
        if (clientRects.length === 2 && clientRects[0].left > clientRects[1].right && x != null && y != null) {
          // Find the first rect in which the point is fully inside.
          return clientRects.find(rect => x > rect.left - paddingObject.left && x < rect.right + paddingObject.right && y > rect.top - paddingObject.top && y < rect.bottom + paddingObject.bottom) || fallback;
        }

        // There are 2 or more connected rects.
        if (clientRects.length >= 2) {
          if (getMainAxisFromPlacement(placement) === 'x') {
            const firstRect = clientRects[0];
            const lastRect = clientRects[clientRects.length - 1];
            const isTop = getSide(placement) === 'top';
            const top = firstRect.top;
            const bottom = lastRect.bottom;
            const left = isTop ? firstRect.left : lastRect.left;
            const right = isTop ? firstRect.right : lastRect.right;
            const width = right - left;
            const height = bottom - top;
            return {
              top,
              bottom,
              left,
              right,
              width,
              height,
              x: left,
              y: top
            };
          }
          const isLeftSide = getSide(placement) === 'left';
          const maxRight = max(...clientRects.map(rect => rect.right));
          const minLeft = min(...clientRects.map(rect => rect.left));
          const measureRects = clientRects.filter(rect => isLeftSide ? rect.left === minLeft : rect.right === maxRight);
          const top = measureRects[0].top;
          const bottom = measureRects[measureRects.length - 1].bottom;
          const left = minLeft;
          const right = maxRight;
          const width = right - left;
          const height = bottom - top;
          return {
            top,
            bottom,
            left,
            right,
            width,
            height,
            x: left,
            y: top
          };
        }
        return fallback;
      }
      const resetRects = await platform.getElementRects({
        reference: {
          getBoundingClientRect
        },
        floating: elements.floating,
        strategy
      });
      if (rects.reference.x !== resetRects.reference.x || rects.reference.y !== resetRects.reference.y || rects.reference.width !== resetRects.reference.width || rects.reference.height !== resetRects.reference.height) {
        return {
          reset: {
            rects: resetRects
          }
        };
      }
      return {};
    }
  };
};

async function convertValueToCoords(state, options) {
  const {
    placement,
    platform,
    elements
  } = state;
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getMainAxisFromPlacement(placement) === 'x';
  const mainAxisMulti = ['left', 'top'].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);

  // eslint-disable-next-line prefer-const
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === 'number' ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...rawValue
  };
  if (alignment && typeof alignmentAxis === 'number') {
    crossAxis = alignment === 'end' ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}

/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */
const offset = function (options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: 'offset',
    options,
    async fn(state) {
      const {
        x,
        y
      } = state;
      const diffCoords = await convertValueToCoords(state, options);
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: diffCoords
      };
    }
  };
};

function getCrossAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */
const shift = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'shift',
    options,
    async fn(state) {
      const {
        x,
        y,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: _ref => {
            let {
              x,
              y
            } = _ref;
            return {
              x,
              y
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const mainAxis = getMainAxisFromPlacement(getSide(placement));
      const crossAxis = getCrossAxis(mainAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === 'y' ? 'top' : 'left';
        const maxSide = mainAxis === 'y' ? 'bottom' : 'right';
        const min = mainAxisCoord + overflow[minSide];
        const max = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = within(min, mainAxisCoord, max);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === 'y' ? 'top' : 'left';
        const maxSide = crossAxis === 'y' ? 'bottom' : 'right';
        const min = crossAxisCoord + overflow[minSide];
        const max = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = within(min, crossAxisCoord, max);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y
        }
      };
    }
  };
};
/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */
const limitShift = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    options,
    fn(state) {
      const {
        x,
        y,
        placement,
        rects,
        middlewareData
      } = state;
      const {
        offset = 0,
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const mainAxis = getMainAxisFromPlacement(placement);
      const crossAxis = getCrossAxis(mainAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const rawOffset = evaluate(offset, state);
      const computedOffset = typeof rawOffset === 'number' ? {
        mainAxis: rawOffset,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...rawOffset
      };
      if (checkMainAxis) {
        const len = mainAxis === 'y' ? 'height' : 'width';
        const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
        const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin;
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax;
        }
      }
      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2;
        const len = mainAxis === 'y' ? 'width' : 'height';
        const isOriginSide = ['top', 'left'].includes(getSide(placement));
        const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
        const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
        if (crossAxisCoord < limitMin) {
          crossAxisCoord = limitMin;
        } else if (crossAxisCoord > limitMax) {
          crossAxisCoord = limitMax;
        }
      }
      return {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      };
    }
  };
};

/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */
const size = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'size',
    options,
    async fn(state) {
      const {
        placement,
        rects,
        platform,
        elements
      } = state;
      const {
        apply = () => {},
        ...detectOverflowOptions
      } = evaluate(options, state);
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const axis = getMainAxisFromPlacement(placement);
      const isXAxis = axis === 'x';
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === 'top' || side === 'bottom') {
        heightSide = side;
        widthSide = alignment === ((await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating))) ? 'start' : 'end') ? 'left' : 'right';
      } else {
        widthSide = side;
        heightSide = alignment === 'end' ? 'top' : 'bottom';
      }
      const overflowAvailableHeight = height - overflow[heightSide];
      const overflowAvailableWidth = width - overflow[widthSide];
      const noShift = !state.middlewareData.shift;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if (isXAxis) {
        const maximumClippingWidth = width - overflow.left - overflow.right;
        availableWidth = alignment || noShift ? min(overflowAvailableWidth, maximumClippingWidth) : maximumClippingWidth;
      } else {
        const maximumClippingHeight = height - overflow.top - overflow.bottom;
        availableHeight = alignment || noShift ? min(overflowAvailableHeight, maximumClippingHeight) : maximumClippingHeight;
      }
      if (noShift && !alignment) {
        const xMin = max(overflow.left, 0);
        const xMax = max(overflow.right, 0);
        const yMin = max(overflow.top, 0);
        const yMax = max(overflow.bottom, 0);
        if (isXAxis) {
          availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
        } else {
          availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};



;// CONCATENATED MODULE: ./node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs



function getWindow(node) {
  var _node$ownerDocument;
  return (node == null ? void 0 : (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}

function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}

function isNode(value) {
  return value instanceof getWindow(value).Node;
}
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || '').toLowerCase();
  }
  // Mocked nodes in testing environments may not be instances of Node. By
  // returning `#document` an infinite loop won't occur.
  // https://github.com/floating-ui/floating-ui/issues/2317
  return '#document';
}

function isHTMLElement(value) {
  return value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(node) {
  // Browsers without `ShadowRoot` support.
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }
  return node instanceof getWindow(node).ShadowRoot || node instanceof ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle$1(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !['inline', 'contents'].includes(display);
}
function isTableElement(element) {
  return ['table', 'td', 'th'].includes(getNodeName(element));
}
function isContainingBlock(element) {
  const safari = isSafari();
  const css = getComputedStyle$1(element);

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  return css.transform !== 'none' || css.perspective !== 'none' || (css.containerType ? css.containerType !== 'normal' : false) || !safari && (css.backdropFilter ? css.backdropFilter !== 'none' : false) || !safari && (css.filter ? css.filter !== 'none' : false) || ['transform', 'perspective', 'filter'].some(value => (css.willChange || '').includes(value)) || ['paint', 'layout', 'strict', 'content'].some(value => (css.contain || '').includes(value));
}
function isSafari() {
  if (typeof CSS === 'undefined' || !CSS.supports) return false;
  return CSS.supports('-webkit-backdrop-filter', 'none');
}
function isLastTraversableNode(node) {
  return ['html', 'body', '#document'].includes(getNodeName(node));
}

const floating_ui_dom_min = Math.min;
const floating_ui_dom_max = Math.max;
const round = Math.round;
const floor = Math.floor;
const createCoords = v => ({
  x: v,
  y: v
});

function getCssDimensions(element) {
  const css = getComputedStyle$1(element);
  // In testing environments, the `width` and `height` properties are empty
  // strings for SVG elements, returning NaN. Fallback to `0` in this case.
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}

function isElement(value) {
  return value instanceof getWindow(value).Element;
}

function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}

function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;

  // 0, NaN, or Infinity should always fallback to 1.

  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}

const noOffsets = /*#__PURE__*/createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isSafari() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}

function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentIFrame = win.frameElement;
    while (currentIFrame && offsetParent && offsetWin !== win) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentIFrame = getWindow(currentIFrame).frameElement;
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}

function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.pageXOffset,
    scrollTop: element.pageYOffset
  };
}

function getDocumentElement(node) {
  return ((isNode(node) ? node.ownerDocument : node.document) || window.document).documentElement;
}

function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  if (offsetParent === documentElement) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== 'fixed') {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}

function getClientRects(element) {
  return Array.from(element.getClientRects());
}

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}

// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable.
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = floating_ui_dom_max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = floating_ui_dom_max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle$1(body).direction === 'rtl') {
    x += floating_ui_dom_max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}

function getParentNode(node) {
  if (getNodeName(node) === 'html') {
    return node;
  }
  const result =
  // Step into the shadow DOM of the parent of a slotted node.
  node.assignedSlot ||
  // DOM Element detected.
  node.parentNode ||
  // ShadowRoot detected.
  isShadowRoot(node) && node.host ||
  // Fallback.
  getDocumentElement(node);
  return isShadowRoot(result) ? result.host : result;
}

function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}

function getOverflowAncestors(node, list) {
  var _node$ownerDocument;
  if (list === void 0) {
    list = [];
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor));
}

function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isSafari();
    if (!visualViewportBased || visualViewportBased && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}

// Returns the inner client rect, subtracting scrollbars if present.
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === 'fixed');
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === 'viewport') {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === 'document') {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      ...clippingAncestor,
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle$1(parentNode).position === 'fixed' || hasFixedPositionAncestor(parentNode, stopNode);
}

// A "clipping ancestor" is an `overflow` element with the characteristic of
// clipping (or hiding) child elements. This returns all clipping ancestors
// of the given element up the tree.
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element).filter(el => isElement(el) && getNodeName(el) !== 'body');
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle$1(element).position === 'fixed';
  let currentNode = elementIsFixed ? getParentNode(element) : element;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle$1(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === 'fixed') {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === 'static' && !!currentContainingBlockComputedStyle && ['absolute', 'fixed'].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      // Drop non-containing blocks.
      result = result.filter(ancestor => ancestor !== currentNode);
    } else {
      // Record last containing block for next iteration.
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}

// Gets the maximum area that the element is visible in due to any number of
// clipping ancestors.
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === 'clippingAncestors' ? getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = floating_ui_dom_max(rect.top, accRect.top);
    accRect.right = floating_ui_dom_min(rect.right, accRect.right);
    accRect.bottom = floating_ui_dom_min(rect.bottom, accRect.bottom);
    accRect.left = floating_ui_dom_max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}

function getDimensions(element) {
  return getCssDimensions(element);
}

function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === 'fixed';
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle$1(element).position === 'fixed') {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else {
      currentNode = getParentNode(currentNode);
    }
  }
  return null;
}

// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function getOffsetParent(element, polyfill) {
  const window = getWindow(element);
  if (!isHTMLElement(element)) {
    return window;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle$1(offsetParent).position === 'static' && !isContainingBlock(offsetParent))) {
    return window;
  }
  return offsetParent || getContainingBlock(element) || window;
}

const getElementRects = async function (_ref) {
  let {
    reference,
    floating,
    strategy
  } = _ref;
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  return {
    reference: getRectRelativeToOffsetParent(reference, await getOffsetParentFn(floating), strategy),
    floating: {
      x: 0,
      y: 0,
      ...(await getDimensionsFn(floating))
    }
  };
};

function isRTL(element) {
  return getComputedStyle(element).direction === 'rtl';
}

const platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};

// https://samthor.au/2021/observing-dom/
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    clearTimeout(timeoutId);
    io && io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const {
      left,
      top,
      width,
      height
    } = element.getBoundingClientRect();
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: floating_ui_dom_max(0, floating_ui_dom_min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 100);
        } else {
          refresh(false, ratio);
        }
      }
      isFirstUpdate = false;
    }

    // Older browsers don't support a `document` as the root and will throw an
    // error.
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}

/**
 * Automatically updates the position of the floating element when necessary.
 * Should only be called when the floating element is mounted on the DOM or
 * visible on the screen.
 * @returns cleanup function that should be invoked when the floating element is
 * removed from the DOM or hidden from the screen.
 * @see https://floating-ui.com/docs/autoUpdate
 */
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === 'function',
    layoutShift = typeof IntersectionObserver === 'function',
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...(referenceEl ? getOverflowAncestors(referenceEl) : []), ...getOverflowAncestors(floating)] : [];
  ancestors.forEach(ancestor => {
    ancestorScroll && ancestor.addEventListener('scroll', update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener('resize', update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver(_ref => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        // Prevent update loops when using the `size` middleware.
        // https://github.com/floating-ui/floating-ui/issues/1740
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          resizeObserver && resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    ancestors.forEach(ancestor => {
      ancestorScroll && ancestor.removeEventListener('scroll', update);
      ancestorResize && ancestor.removeEventListener('resize', update);
    });
    cleanupIo && cleanupIo();
    resizeObserver && resizeObserver.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a reference element when it is given a certain CSS positioning
 * strategy.
 */
const floating_ui_dom_computePosition = (reference, floating, options) => {
  // This caches the expensive `getClippingElementAncestors` function so that
  // multiple lifecycle resets re-use the same result. It only lives for a
  // single call. If other functions become expensive, we can add them as well.
  const cache = new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};



;// CONCATENATED MODULE: ./node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.esm.js






/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * This wraps the core `arrow` middleware to allow React refs as the element.
 * @see https://floating-ui.com/docs/arrow
 */
const floating_ui_react_dom_esm_arrow = options => {
  function isRef(value) {
    return {}.hasOwnProperty.call(value, 'current');
  }
  return {
    name: 'arrow',
    options,
    fn(state) {
      const {
        element,
        padding
      } = typeof options === 'function' ? options(state) : options;
      if (element && isRef(element)) {
        if (element.current != null) {
          return arrow({
            element: element.current,
            padding
          }).fn(state);
        }
        return {};
      } else if (element) {
        return arrow({
          element,
          padding
        }).fn(state);
      }
      return {};
    }
  };
};

var index = typeof document !== 'undefined' ? react_.useLayoutEffect : react_.useEffect;

// Fork of `fast-deep-equal` that only does the comparisons we need and compares
// functions
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (typeof a === 'function' && a.toString() === b.toString()) {
    return true;
  }
  let length, i, keys;
  if (a && b && typeof a == 'object') {
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;) {
        if (!deepEqual(a[i], b[i])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) {
      return false;
    }
    for (i = length; i-- !== 0;) {
      if (!{}.hasOwnProperty.call(b, keys[i])) {
        return false;
      }
    }
    for (i = length; i-- !== 0;) {
      const key = keys[i];
      if (key === '_owner' && a.$$typeof) {
        continue;
      }
      if (!deepEqual(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }
  return a !== a && b !== b;
}

function getDPR(element) {
  if (typeof window === 'undefined') {
    return 1;
  }
  const win = element.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}

function roundByDPR(element, value) {
  const dpr = getDPR(element);
  return Math.round(value * dpr) / dpr;
}

function useLatestRef(value) {
  const ref = react_.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}

/**
 * Provides data to position a floating element.
 * @see https://floating-ui.com/docs/react
 */
function useFloating(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    placement = 'bottom',
    strategy = 'absolute',
    middleware = [],
    platform,
    elements: {
      reference: externalReference,
      floating: externalFloating
    } = {},
    transform = true,
    whileElementsMounted,
    open
  } = options;
  const [data, setData] = react_.useState({
    x: 0,
    y: 0,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false
  });
  const [latestMiddleware, setLatestMiddleware] = react_.useState(middleware);
  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }
  const [_reference, _setReference] = react_.useState(null);
  const [_floating, _setFloating] = react_.useState(null);
  const setReference = react_.useCallback(node => {
    if (node != referenceRef.current) {
      referenceRef.current = node;
      _setReference(node);
    }
  }, [_setReference]);
  const setFloating = react_.useCallback(node => {
    if (node !== floatingRef.current) {
      floatingRef.current = node;
      _setFloating(node);
    }
  }, [_setFloating]);
  const referenceEl = externalReference || _reference;
  const floatingEl = externalFloating || _floating;
  const referenceRef = react_.useRef(null);
  const floatingRef = react_.useRef(null);
  const dataRef = react_.useRef(data);
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const platformRef = useLatestRef(platform);
  const update = react_.useCallback(() => {
    if (!referenceRef.current || !floatingRef.current) {
      return;
    }
    const config = {
      placement,
      strategy,
      middleware: latestMiddleware
    };
    if (platformRef.current) {
      config.platform = platformRef.current;
    }
    floating_ui_dom_computePosition(referenceRef.current, floatingRef.current, config).then(data => {
      const fullData = {
        ...data,
        isPositioned: true
      };
      if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
        dataRef.current = fullData;
        server_rendering_stub_.flushSync(() => {
          setData(fullData);
        });
      }
    });
  }, [latestMiddleware, placement, strategy, platformRef]);
  index(() => {
    if (open === false && dataRef.current.isPositioned) {
      dataRef.current.isPositioned = false;
      setData(data => ({
        ...data,
        isPositioned: false
      }));
    }
  }, [open]);
  const isMountedRef = react_.useRef(false);
  index(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  index(() => {
    if (referenceEl) referenceRef.current = referenceEl;
    if (floatingEl) floatingRef.current = floatingEl;
    if (referenceEl && floatingEl) {
      if (whileElementsMountedRef.current) {
        return whileElementsMountedRef.current(referenceEl, floatingEl, update);
      } else {
        update();
      }
    }
  }, [referenceEl, floatingEl, update, whileElementsMountedRef]);
  const refs = react_.useMemo(() => ({
    reference: referenceRef,
    floating: floatingRef,
    setReference,
    setFloating
  }), [setReference, setFloating]);
  const elements = react_.useMemo(() => ({
    reference: referenceEl,
    floating: floatingEl
  }), [referenceEl, floatingEl]);
  const floatingStyles = react_.useMemo(() => {
    const initialStyles = {
      position: strategy,
      left: 0,
      top: 0
    };
    if (!elements.floating) {
      return initialStyles;
    }
    const x = roundByDPR(elements.floating, data.x);
    const y = roundByDPR(elements.floating, data.y);
    if (transform) {
      return {
        ...initialStyles,
        transform: "translate(" + x + "px, " + y + "px)",
        ...(getDPR(elements.floating) >= 1.5 && {
          willChange: 'transform'
        })
      };
    }
    return {
      position: strategy,
      left: x,
      top: y
    };
  }, [strategy, transform, elements.floating, data.x, data.y]);
  return react_.useMemo(() => ({
    ...data,
    update,
    refs,
    elements,
    floatingStyles
  }), [data, update, refs, elements, floatingStyles]);
}



// EXTERNAL MODULE: ./node_modules/@radix-ui/react-primitive/dist/index.mjs
var react_primitive_dist = __webpack_require__(15585);
;// CONCATENATED MODULE: ./node_modules/@radix-ui/react-arrow/dist/index.mjs







/* -------------------------------------------------------------------------------------------------
 * Arrow
 * -----------------------------------------------------------------------------------------------*/ const $7e8f5cd07187803e$var$NAME = 'Arrow';
const $7e8f5cd07187803e$export$21b07c8f274aebd5 = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const { children: children , width: width = 10 , height: height = 5 , ...arrowProps } = props;
    return /*#__PURE__*/ (0,react_.createElement)(react_primitive_dist/* Primitive */.WV.svg, (0,esm_extends/* default */.Z)({}, arrowProps, {
        ref: forwardedRef,
        width: width,
        height: height,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none"
    }), props.asChild ? children : /*#__PURE__*/ (0,react_.createElement)("polygon", {
        points: "0,0 30,0 15,10"
    }));
});
/*#__PURE__*/ Object.assign($7e8f5cd07187803e$export$21b07c8f274aebd5, {
    displayName: $7e8f5cd07187803e$var$NAME
});
/* -----------------------------------------------------------------------------------------------*/ const $7e8f5cd07187803e$export$be92b6f5f03c0fe9 = $7e8f5cd07187803e$export$21b07c8f274aebd5;





//# sourceMappingURL=index.mjs.map

// EXTERNAL MODULE: ./node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
var react_use_callback_ref_dist = __webpack_require__(76601);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var react_use_layout_effect_dist = __webpack_require__(72660);
;// CONCATENATED MODULE: ./node_modules/@radix-ui/react-use-size/dist/index.mjs





function $db6c3485150b8e66$export$1ab7ae714698c4b8(element) {
    const [size, setSize] = (0,react_.useState)(undefined);
    (0,react_use_layout_effect_dist/* useLayoutEffect */.b)(()=>{
        if (element) {
            // provide size as early as possible
            setSize({
                width: element.offsetWidth,
                height: element.offsetHeight
            });
            const resizeObserver = new ResizeObserver((entries)=>{
                if (!Array.isArray(entries)) return;
                 // Since we only observe the one element, we don't need to loop over the
                // array
                if (!entries.length) return;
                const entry = entries[0];
                let width;
                let height;
                if ('borderBoxSize' in entry) {
                    const borderSizeEntry = entry['borderBoxSize']; // iron out differences between browsers
                    const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
                    width = borderSize['inlineSize'];
                    height = borderSize['blockSize'];
                } else {
                    // for browsers that don't support `borderBoxSize`
                    // we calculate it ourselves to get the correct border box.
                    width = element.offsetWidth;
                    height = element.offsetHeight;
                }
                setSize({
                    width: width,
                    height: height
                });
            });
            resizeObserver.observe(element, {
                box: 'border-box'
            });
            return ()=>resizeObserver.unobserve(element)
            ;
        } else // We only want to reset to `undefined` when the element becomes `null`,
        // not if it changes to another element.
        setSize(undefined);
    }, [
        element
    ]);
    return size;
}





//# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ./node_modules/@radix-ui/react-popper/dist/index.mjs





















const $cf1ac5d9fe0e8206$export$36f0086da09c4b9f = (/* unused pure expression or super */ null && ([
    'top',
    'right',
    'bottom',
    'left'
]));
const $cf1ac5d9fe0e8206$export$3671ffab7b302fc9 = (/* unused pure expression or super */ null && ([
    'start',
    'center',
    'end'
]));
/* -------------------------------------------------------------------------------------------------
 * Popper
 * -----------------------------------------------------------------------------------------------*/ const $cf1ac5d9fe0e8206$var$POPPER_NAME = 'Popper';
const [$cf1ac5d9fe0e8206$var$createPopperContext, $cf1ac5d9fe0e8206$export$722aac194ae923] = (0,react_context_dist/* createContextScope */.b)($cf1ac5d9fe0e8206$var$POPPER_NAME);
const [$cf1ac5d9fe0e8206$var$PopperProvider, $cf1ac5d9fe0e8206$var$usePopperContext] = $cf1ac5d9fe0e8206$var$createPopperContext($cf1ac5d9fe0e8206$var$POPPER_NAME);
const $cf1ac5d9fe0e8206$export$badac9ada3a0bdf9 = (props)=>{
    const { __scopePopper: __scopePopper , children: children  } = props;
    const [anchor, setAnchor] = (0,react_.useState)(null);
    return /*#__PURE__*/ (0,react_.createElement)($cf1ac5d9fe0e8206$var$PopperProvider, {
        scope: __scopePopper,
        anchor: anchor,
        onAnchorChange: setAnchor
    }, children);
};
/*#__PURE__*/ Object.assign($cf1ac5d9fe0e8206$export$badac9ada3a0bdf9, {
    displayName: $cf1ac5d9fe0e8206$var$POPPER_NAME
});
/* -------------------------------------------------------------------------------------------------
 * PopperAnchor
 * -----------------------------------------------------------------------------------------------*/ const $cf1ac5d9fe0e8206$var$ANCHOR_NAME = 'PopperAnchor';
const $cf1ac5d9fe0e8206$export$ecd4e1ccab6ed6d = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const { __scopePopper: __scopePopper , virtualRef: virtualRef , ...anchorProps } = props;
    const context = $cf1ac5d9fe0e8206$var$usePopperContext($cf1ac5d9fe0e8206$var$ANCHOR_NAME, __scopePopper);
    const ref = (0,react_.useRef)(null);
    const composedRefs = (0,react_compose_refs_dist/* useComposedRefs */.e)(forwardedRef, ref);
    (0,react_.useEffect)(()=>{
        // Consumer can anchor the popper to something that isn't
        // a DOM node e.g. pointer position, so we override the
        // `anchorRef` with their virtual ref in this case.
        context.onAnchorChange((virtualRef === null || virtualRef === void 0 ? void 0 : virtualRef.current) || ref.current);
    });
    return virtualRef ? null : /*#__PURE__*/ (0,react_.createElement)(react_primitive_dist/* Primitive */.WV.div, (0,esm_extends/* default */.Z)({}, anchorProps, {
        ref: composedRefs
    }));
});
/*#__PURE__*/ Object.assign($cf1ac5d9fe0e8206$export$ecd4e1ccab6ed6d, {
    displayName: $cf1ac5d9fe0e8206$var$ANCHOR_NAME
});
/* -------------------------------------------------------------------------------------------------
 * PopperContent
 * -----------------------------------------------------------------------------------------------*/ const $cf1ac5d9fe0e8206$var$CONTENT_NAME = 'PopperContent';
const [$cf1ac5d9fe0e8206$var$PopperContentProvider, $cf1ac5d9fe0e8206$var$useContentContext] = $cf1ac5d9fe0e8206$var$createPopperContext($cf1ac5d9fe0e8206$var$CONTENT_NAME);
const $cf1ac5d9fe0e8206$export$bc4ae5855d3c4fc = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    var _arrowSize$width, _arrowSize$height, _middlewareData$arrow, _middlewareData$arrow2, _middlewareData$arrow3, _middlewareData$trans, _middlewareData$trans2, _middlewareData$hide;
    const { __scopePopper: __scopePopper , side: side = 'bottom' , sideOffset: sideOffset = 0 , align: align = 'center' , alignOffset: alignOffset = 0 , arrowPadding: arrowPadding = 0 , collisionBoundary: collisionBoundary = [] , collisionPadding: collisionPaddingProp = 0 , sticky: sticky = 'partial' , hideWhenDetached: hideWhenDetached = false , avoidCollisions: avoidCollisions = true , onPlaced: onPlaced , ...contentProps } = props;
    const context = $cf1ac5d9fe0e8206$var$usePopperContext($cf1ac5d9fe0e8206$var$CONTENT_NAME, __scopePopper);
    const [content, setContent] = (0,react_.useState)(null);
    const composedRefs = (0,react_compose_refs_dist/* useComposedRefs */.e)(forwardedRef, (node)=>setContent(node)
    );
    const [arrow, setArrow] = (0,react_.useState)(null);
    const arrowSize = $db6c3485150b8e66$export$1ab7ae714698c4b8(arrow);
    const arrowWidth = (_arrowSize$width = arrowSize === null || arrowSize === void 0 ? void 0 : arrowSize.width) !== null && _arrowSize$width !== void 0 ? _arrowSize$width : 0;
    const arrowHeight = (_arrowSize$height = arrowSize === null || arrowSize === void 0 ? void 0 : arrowSize.height) !== null && _arrowSize$height !== void 0 ? _arrowSize$height : 0;
    const desiredPlacement = side + (align !== 'center' ? '-' + align : '');
    const collisionPadding = typeof collisionPaddingProp === 'number' ? collisionPaddingProp : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...collisionPaddingProp
    };
    const boundary = Array.isArray(collisionBoundary) ? collisionBoundary : [
        collisionBoundary
    ];
    const hasExplicitBoundaries = boundary.length > 0;
    const detectOverflowOptions = {
        padding: collisionPadding,
        boundary: boundary.filter($cf1ac5d9fe0e8206$var$isNotNull),
        // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
        altBoundary: hasExplicitBoundaries
    };
    const { refs: refs , floatingStyles: floatingStyles , placement: placement , isPositioned: isPositioned , middlewareData: middlewareData  } = useFloating({
        // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
        strategy: 'fixed',
        placement: desiredPlacement,
        whileElementsMounted: autoUpdate,
        elements: {
            reference: context.anchor
        },
        middleware: [
            offset({
                mainAxis: sideOffset + arrowHeight,
                alignmentAxis: alignOffset
            }),
            avoidCollisions && shift({
                mainAxis: true,
                crossAxis: false,
                limiter: sticky === 'partial' ? limitShift() : undefined,
                ...detectOverflowOptions
            }),
            avoidCollisions && flip({
                ...detectOverflowOptions
            }),
            size({
                ...detectOverflowOptions,
                apply: ({ elements: elements , rects: rects , availableWidth: availableWidth , availableHeight: availableHeight  })=>{
                    const { width: anchorWidth , height: anchorHeight  } = rects.reference;
                    const contentStyle = elements.floating.style;
                    contentStyle.setProperty('--radix-popper-available-width', `${availableWidth}px`);
                    contentStyle.setProperty('--radix-popper-available-height', `${availableHeight}px`);
                    contentStyle.setProperty('--radix-popper-anchor-width', `${anchorWidth}px`);
                    contentStyle.setProperty('--radix-popper-anchor-height', `${anchorHeight}px`);
                }
            }),
            arrow && floating_ui_react_dom_esm_arrow({
                element: arrow,
                padding: arrowPadding
            }),
            $cf1ac5d9fe0e8206$var$transformOrigin({
                arrowWidth: arrowWidth,
                arrowHeight: arrowHeight
            }),
            hideWhenDetached && hide({
                strategy: 'referenceHidden'
            })
        ]
    });
    const [placedSide, placedAlign] = $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(placement);
    const handlePlaced = (0,react_use_callback_ref_dist/* useCallbackRef */.W)(onPlaced);
    (0,react_use_layout_effect_dist/* useLayoutEffect */.b)(()=>{
        if (isPositioned) handlePlaced === null || handlePlaced === void 0 || handlePlaced();
    }, [
        isPositioned,
        handlePlaced
    ]);
    const arrowX = (_middlewareData$arrow = middlewareData.arrow) === null || _middlewareData$arrow === void 0 ? void 0 : _middlewareData$arrow.x;
    const arrowY = (_middlewareData$arrow2 = middlewareData.arrow) === null || _middlewareData$arrow2 === void 0 ? void 0 : _middlewareData$arrow2.y;
    const cannotCenterArrow = ((_middlewareData$arrow3 = middlewareData.arrow) === null || _middlewareData$arrow3 === void 0 ? void 0 : _middlewareData$arrow3.centerOffset) !== 0;
    const [contentZIndex, setContentZIndex] = (0,react_.useState)();
    (0,react_use_layout_effect_dist/* useLayoutEffect */.b)(()=>{
        if (content) setContentZIndex(window.getComputedStyle(content).zIndex);
    }, [
        content
    ]);
    return /*#__PURE__*/ (0,react_.createElement)("div", {
        ref: refs.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...floatingStyles,
            transform: isPositioned ? floatingStyles.transform : 'translate(0, -200%)',
            // keep off the page when measuring
            minWidth: 'max-content',
            zIndex: contentZIndex,
            ['--radix-popper-transform-origin']: [
                (_middlewareData$trans = middlewareData.transformOrigin) === null || _middlewareData$trans === void 0 ? void 0 : _middlewareData$trans.x,
                (_middlewareData$trans2 = middlewareData.transformOrigin) === null || _middlewareData$trans2 === void 0 ? void 0 : _middlewareData$trans2.y
            ].join(' ')
        } // Floating UI interally calculates logical alignment based the `dir` attribute on
        ,
        dir: props.dir
    }, /*#__PURE__*/ (0,react_.createElement)($cf1ac5d9fe0e8206$var$PopperContentProvider, {
        scope: __scopePopper,
        placedSide: placedSide,
        onArrowChange: setArrow,
        arrowX: arrowX,
        arrowY: arrowY,
        shouldHideArrow: cannotCenterArrow
    }, /*#__PURE__*/ (0,react_.createElement)(react_primitive_dist/* Primitive */.WV.div, (0,esm_extends/* default */.Z)({
        "data-side": placedSide,
        "data-align": placedAlign
    }, contentProps, {
        ref: composedRefs,
        style: {
            ...contentProps.style,
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: !isPositioned ? 'none' : undefined,
            // hide the content if using the hide middleware and should be hidden
            opacity: (_middlewareData$hide = middlewareData.hide) !== null && _middlewareData$hide !== void 0 && _middlewareData$hide.referenceHidden ? 0 : undefined
        }
    }))));
});
/*#__PURE__*/ Object.assign($cf1ac5d9fe0e8206$export$bc4ae5855d3c4fc, {
    displayName: $cf1ac5d9fe0e8206$var$CONTENT_NAME
});
/* -------------------------------------------------------------------------------------------------
 * PopperArrow
 * -----------------------------------------------------------------------------------------------*/ const $cf1ac5d9fe0e8206$var$ARROW_NAME = 'PopperArrow';
const $cf1ac5d9fe0e8206$var$OPPOSITE_SIDE = {
    top: 'bottom',
    right: 'left',
    bottom: 'top',
    left: 'right'
};
const $cf1ac5d9fe0e8206$export$79d62cd4e10a3fd0 = /*#__PURE__*/ (0,react_.forwardRef)(function $cf1ac5d9fe0e8206$export$79d62cd4e10a3fd0(props, forwardedRef) {
    const { __scopePopper: __scopePopper , ...arrowProps } = props;
    const contentContext = $cf1ac5d9fe0e8206$var$useContentContext($cf1ac5d9fe0e8206$var$ARROW_NAME, __scopePopper);
    const baseSide = $cf1ac5d9fe0e8206$var$OPPOSITE_SIDE[contentContext.placedSide];
    return(/*#__PURE__*/ // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    (0,react_.createElement)("span", {
        ref: contentContext.onArrowChange,
        style: {
            position: 'absolute',
            left: contentContext.arrowX,
            top: contentContext.arrowY,
            [baseSide]: 0,
            transformOrigin: {
                top: '',
                right: '0 0',
                bottom: 'center 0',
                left: '100% 0'
            }[contentContext.placedSide],
            transform: {
                top: 'translateY(100%)',
                right: 'translateY(50%) rotate(90deg) translateX(-50%)',
                bottom: `rotate(180deg)`,
                left: 'translateY(50%) rotate(-90deg) translateX(50%)'
            }[contentContext.placedSide],
            visibility: contentContext.shouldHideArrow ? 'hidden' : undefined
        }
    }, /*#__PURE__*/ (0,react_.createElement)($7e8f5cd07187803e$export$be92b6f5f03c0fe9, (0,esm_extends/* default */.Z)({}, arrowProps, {
        ref: forwardedRef,
        style: {
            ...arrowProps.style,
            // ensures the element can be measured correctly (mostly for if SVG)
            display: 'block'
        }
    }))));
});
/*#__PURE__*/ Object.assign($cf1ac5d9fe0e8206$export$79d62cd4e10a3fd0, {
    displayName: $cf1ac5d9fe0e8206$var$ARROW_NAME
});
/* -----------------------------------------------------------------------------------------------*/ function $cf1ac5d9fe0e8206$var$isNotNull(value) {
    return value !== null;
}
const $cf1ac5d9fe0e8206$var$transformOrigin = (options)=>({
        name: 'transformOrigin',
        options: options,
        fn (data) {
            var _middlewareData$arrow4, _middlewareData$arrow5, _middlewareData$arrow6, _middlewareData$arrow7, _middlewareData$arrow8;
            const { placement: placement , rects: rects , middlewareData: middlewareData  } = data;
            const cannotCenterArrow = ((_middlewareData$arrow4 = middlewareData.arrow) === null || _middlewareData$arrow4 === void 0 ? void 0 : _middlewareData$arrow4.centerOffset) !== 0;
            const isArrowHidden = cannotCenterArrow;
            const arrowWidth = isArrowHidden ? 0 : options.arrowWidth;
            const arrowHeight = isArrowHidden ? 0 : options.arrowHeight;
            const [placedSide, placedAlign] = $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(placement);
            const noArrowAlign = {
                start: '0%',
                center: '50%',
                end: '100%'
            }[placedAlign];
            const arrowXCenter = ((_middlewareData$arrow5 = (_middlewareData$arrow6 = middlewareData.arrow) === null || _middlewareData$arrow6 === void 0 ? void 0 : _middlewareData$arrow6.x) !== null && _middlewareData$arrow5 !== void 0 ? _middlewareData$arrow5 : 0) + arrowWidth / 2;
            const arrowYCenter = ((_middlewareData$arrow7 = (_middlewareData$arrow8 = middlewareData.arrow) === null || _middlewareData$arrow8 === void 0 ? void 0 : _middlewareData$arrow8.y) !== null && _middlewareData$arrow7 !== void 0 ? _middlewareData$arrow7 : 0) + arrowHeight / 2;
            let x = '';
            let y = '';
            if (placedSide === 'bottom') {
                x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
                y = `${-arrowHeight}px`;
            } else if (placedSide === 'top') {
                x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
                y = `${rects.floating.height + arrowHeight}px`;
            } else if (placedSide === 'right') {
                x = `${-arrowHeight}px`;
                y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
            } else if (placedSide === 'left') {
                x = `${rects.floating.width + arrowHeight}px`;
                y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
            }
            return {
                data: {
                    x: x,
                    y: y
                }
            };
        }
    })
;
function $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(placement) {
    const [side, align = 'center'] = placement.split('-');
    return [
        side,
        align
    ];
}
const $cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9 = $cf1ac5d9fe0e8206$export$badac9ada3a0bdf9;
const $cf1ac5d9fe0e8206$export$b688253958b8dfe7 = $cf1ac5d9fe0e8206$export$ecd4e1ccab6ed6d;
const $cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2 = $cf1ac5d9fe0e8206$export$bc4ae5855d3c4fc;
const $cf1ac5d9fe0e8206$export$21b07c8f274aebd5 = $cf1ac5d9fe0e8206$export$79d62cd4e10a3fd0;





//# sourceMappingURL=index.mjs.map

// EXTERNAL MODULE: ./node_modules/@radix-ui/react-portal/dist/index.mjs
var react_portal_dist = __webpack_require__(23214);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var react_use_controllable_state_dist = __webpack_require__(64352);
;// CONCATENATED MODULE: ./node_modules/@radix-ui/react-use-previous/dist/index.mjs



function $010c2913dbd2fe3d$export$5cae361ad82dce8b(value) {
    const ref = (0,react_.useRef)({
        value: value,
        previous: value
    }); // We compare values before making an update to ensure that
    // a change has been made. This ensures the previous value is
    // persisted correctly between renders.
    return (0,react_.useMemo)(()=>{
        if (ref.current.value !== value) {
            ref.current.previous = ref.current.value;
            ref.current.value = value;
        }
        return ref.current.previous;
    }, [
        value
    ]);
}





//# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ./node_modules/@radix-ui/react-visually-hidden/dist/index.mjs







/* -------------------------------------------------------------------------------------------------
 * VisuallyHidden
 * -----------------------------------------------------------------------------------------------*/ const $ea1ef594cf570d83$var$NAME = 'VisuallyHidden';
const $ea1ef594cf570d83$export$439d29a4e110a164 = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    return /*#__PURE__*/ (0,react_.createElement)(react_primitive_dist/* Primitive */.WV.span, (0,esm_extends/* default */.Z)({}, props, {
        ref: forwardedRef,
        style: {
            // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
            position: 'absolute',
            border: 0,
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: 'hidden',
            clip: 'rect(0, 0, 0, 0)',
            whiteSpace: 'nowrap',
            wordWrap: 'normal',
            ...props.style
        }
    }));
});
/*#__PURE__*/ Object.assign($ea1ef594cf570d83$export$439d29a4e110a164, {
    displayName: $ea1ef594cf570d83$var$NAME
});
/* -----------------------------------------------------------------------------------------------*/ const $ea1ef594cf570d83$export$be92b6f5f03c0fe9 = (/* unused pure expression or super */ null && ($ea1ef594cf570d83$export$439d29a4e110a164));





//# sourceMappingURL=index.mjs.map

// EXTERNAL MODULE: ./node_modules/aria-hidden/dist/es5/index.js
var es5 = __webpack_require__(36860);
// EXTERNAL MODULE: ./node_modules/react-remove-scroll/dist/es5/index.js
var dist_es5 = __webpack_require__(88162);
;// CONCATENATED MODULE: ./node_modules/@radix-ui/react-select/dist/index.mjs


















































const $cc7e05a45900e73f$var$OPEN_KEYS = [
    ' ',
    'Enter',
    'ArrowUp',
    'ArrowDown'
];
const $cc7e05a45900e73f$var$SELECTION_KEYS = [
    ' ',
    'Enter'
];
/* -------------------------------------------------------------------------------------------------
 * Select
 * -----------------------------------------------------------------------------------------------*/ const $cc7e05a45900e73f$var$SELECT_NAME = 'Select';
const [$cc7e05a45900e73f$var$Collection, $cc7e05a45900e73f$var$useCollection, $cc7e05a45900e73f$var$createCollectionScope] = $e02a7d9cb1dc128c$export$c74125a8e3af6bb2($cc7e05a45900e73f$var$SELECT_NAME);
const [$cc7e05a45900e73f$var$createSelectContext, $cc7e05a45900e73f$export$286727a75dc039bd] = (0,react_context_dist/* createContextScope */.b)($cc7e05a45900e73f$var$SELECT_NAME, [
    $cc7e05a45900e73f$var$createCollectionScope,
    $cf1ac5d9fe0e8206$export$722aac194ae923
]);
const $cc7e05a45900e73f$var$usePopperScope = $cf1ac5d9fe0e8206$export$722aac194ae923();
const [$cc7e05a45900e73f$var$SelectProvider, $cc7e05a45900e73f$var$useSelectContext] = $cc7e05a45900e73f$var$createSelectContext($cc7e05a45900e73f$var$SELECT_NAME);
const [$cc7e05a45900e73f$var$SelectNativeOptionsProvider, $cc7e05a45900e73f$var$useSelectNativeOptionsContext] = $cc7e05a45900e73f$var$createSelectContext($cc7e05a45900e73f$var$SELECT_NAME);
const $cc7e05a45900e73f$export$ef9b1a59e592288f = (props)=>{
    const { __scopeSelect: __scopeSelect , children: children , open: openProp , defaultOpen: defaultOpen , onOpenChange: onOpenChange , value: valueProp , defaultValue: defaultValue , onValueChange: onValueChange , dir: dir , name: name , autoComplete: autoComplete , disabled: disabled , required: required  } = props;
    const popperScope = $cc7e05a45900e73f$var$usePopperScope(__scopeSelect);
    const [trigger, setTrigger] = (0,react_.useState)(null);
    const [valueNode, setValueNode] = (0,react_.useState)(null);
    const [valueNodeHasChildren, setValueNodeHasChildren] = (0,react_.useState)(false);
    const direction = $f631663db3294ace$export$b39126d51d94e6f3(dir);
    const [open = false, setOpen] = (0,react_use_controllable_state_dist/* useControllableState */.T)({
        prop: openProp,
        defaultProp: defaultOpen,
        onChange: onOpenChange
    });
    const [value, setValue] = (0,react_use_controllable_state_dist/* useControllableState */.T)({
        prop: valueProp,
        defaultProp: defaultValue,
        onChange: onValueChange
    });
    const triggerPointerDownPosRef = (0,react_.useRef)(null); // We set this to true by default so that events bubble to forms without JS (SSR)
    const isFormControl = trigger ? Boolean(trigger.closest('form')) : true;
    const [nativeOptionsSet, setNativeOptionsSet] = (0,react_.useState)(new Set()); // The native `select` only associates the correct default value if the corresponding
    // `option` is rendered as a child **at the same time** as itself.
    // Because it might take a few renders for our items to gather the information to build
    // the native `option`(s), we generate a key on the `select` to make sure React re-builds it
    // each time the options change.
    const nativeSelectKey = Array.from(nativeOptionsSet).map((option)=>option.props.value
    ).join(';');
    return /*#__PURE__*/ (0,react_.createElement)($cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9, popperScope, /*#__PURE__*/ (0,react_.createElement)($cc7e05a45900e73f$var$SelectProvider, {
        required: required,
        scope: __scopeSelect,
        trigger: trigger,
        onTriggerChange: setTrigger,
        valueNode: valueNode,
        onValueNodeChange: setValueNode,
        valueNodeHasChildren: valueNodeHasChildren,
        onValueNodeHasChildrenChange: setValueNodeHasChildren,
        contentId: (0,react_id_dist/* useId */.M)(),
        value: value,
        onValueChange: setValue,
        open: open,
        onOpenChange: setOpen,
        dir: direction,
        triggerPointerDownPosRef: triggerPointerDownPosRef,
        disabled: disabled
    }, /*#__PURE__*/ (0,react_.createElement)($cc7e05a45900e73f$var$Collection.Provider, {
        scope: __scopeSelect
    }, /*#__PURE__*/ (0,react_.createElement)($cc7e05a45900e73f$var$SelectNativeOptionsProvider, {
        scope: props.__scopeSelect,
        onNativeOptionAdd: (0,react_.useCallback)((option)=>{
            setNativeOptionsSet((prev)=>new Set(prev).add(option)
            );
        }, []),
        onNativeOptionRemove: (0,react_.useCallback)((option)=>{
            setNativeOptionsSet((prev)=>{
                const optionsSet = new Set(prev);
                optionsSet.delete(option);
                return optionsSet;
            });
        }, [])
    }, children)), isFormControl ? /*#__PURE__*/ (0,react_.createElement)($cc7e05a45900e73f$var$BubbleSelect, {
        key: nativeSelectKey,
        "aria-hidden": true,
        required: required,
        tabIndex: -1,
        name: name,
        autoComplete: autoComplete,
        value: value // enable form autofill
        ,
        onChange: (event)=>setValue(event.target.value)
        ,
        disabled: disabled
    }, value === undefined ? /*#__PURE__*/ (0,react_.createElement)("option", {
        value: ""
    }) : null, Array.from(nativeOptionsSet)) : null));
};
/*#__PURE__*/ Object.assign($cc7e05a45900e73f$export$ef9b1a59e592288f, {
    displayName: $cc7e05a45900e73f$var$SELECT_NAME
});
/* -------------------------------------------------------------------------------------------------
 * SelectTrigger
 * -----------------------------------------------------------------------------------------------*/ const $cc7e05a45900e73f$var$TRIGGER_NAME = 'SelectTrigger';
const $cc7e05a45900e73f$export$3ac1e88a1c0b9f1 = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const { __scopeSelect: __scopeSelect , disabled: disabled = false , ...triggerProps } = props;
    const popperScope = $cc7e05a45900e73f$var$usePopperScope(__scopeSelect);
    const context = $cc7e05a45900e73f$var$useSelectContext($cc7e05a45900e73f$var$TRIGGER_NAME, __scopeSelect);
    const isDisabled = context.disabled || disabled;
    const composedRefs = (0,react_compose_refs_dist/* useComposedRefs */.e)(forwardedRef, context.onTriggerChange);
    const getItems = $cc7e05a45900e73f$var$useCollection(__scopeSelect);
    const [searchRef, handleTypeaheadSearch, resetTypeahead] = $cc7e05a45900e73f$var$useTypeaheadSearch((search)=>{
        const enabledItems = getItems().filter((item)=>!item.disabled
        );
        const currentItem = enabledItems.find((item)=>item.value === context.value
        );
        const nextItem = $cc7e05a45900e73f$var$findNextItem(enabledItems, search, currentItem);
        if (nextItem !== undefined) context.onValueChange(nextItem.value);
    });
    const handleOpen = ()=>{
        if (!isDisabled) {
            context.onOpenChange(true); // reset typeahead when we open
            resetTypeahead();
        }
    };
    return /*#__PURE__*/ (0,react_.createElement)($cf1ac5d9fe0e8206$export$b688253958b8dfe7, (0,esm_extends/* default */.Z)({
        asChild: true
    }, popperScope), /*#__PURE__*/ (0,react_.createElement)(react_primitive_dist/* Primitive */.WV.button, (0,esm_extends/* default */.Z)({
        type: "button",
        role: "combobox",
        "aria-controls": context.contentId,
        "aria-expanded": context.open,
        "aria-required": context.required,
        "aria-autocomplete": "none",
        dir: context.dir,
        "data-state": context.open ? 'open' : 'closed',
        disabled: isDisabled,
        "data-disabled": isDisabled ? '' : undefined,
        "data-placeholder": context.value === undefined ? '' : undefined
    }, triggerProps, {
        ref: composedRefs // Enable compatibility with native label or custom `Label` "click" for Safari:
        ,
        onClick: (0,dist/* composeEventHandlers */.M)(triggerProps.onClick, (event)=>{
            // Whilst browsers generally have no issue focusing the trigger when clicking
            // on a label, Safari seems to struggle with the fact that there's no `onClick`.
            // We force `focus` in this case. Note: this doesn't create any other side-effect
            // because we are preventing default in `onPointerDown` so effectively
            // this only runs for a label "click"
            event.currentTarget.focus();
        }),
        onPointerDown: (0,dist/* composeEventHandlers */.M)(triggerProps.onPointerDown, (event)=>{
            // prevent implicit pointer capture
            // https://www.w3.org/TR/pointerevents3/#implicit-pointer-capture
            const target = event.target;
            if (target.hasPointerCapture(event.pointerId)) target.releasePointerCapture(event.pointerId);
             // only call handler if it's the left button (mousedown gets triggered by all mouse buttons)
            // but not when the control key is pressed (avoiding MacOS right click)
            if (event.button === 0 && event.ctrlKey === false) {
                handleOpen();
                context.triggerPointerDownPosRef.current = {
                    x: Math.round(event.pageX),
                    y: Math.round(event.pageY)
                }; // prevent trigger from stealing focus from the active item after opening.
                event.preventDefault();
            }
        }),
        onKeyDown: (0,dist/* composeEventHandlers */.M)(triggerProps.onKeyDown, (event)=>{
            const isTypingAhead = searchRef.current !== '';
            const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
            if (!isModifierKey && event.key.length === 1) handleTypeaheadSearch(event.key);
            if (isTypingAhead && event.key === ' ') return;
            if ($cc7e05a45900e73f$var$OPEN_KEYS.includes(event.key)) {
                handleOpen();
                event.preventDefault();
            }
        })
    })));
});
/*#__PURE__*/ Object.assign($cc7e05a45900e73f$export$3ac1e88a1c0b9f1, {
    displayName: $cc7e05a45900e73f$var$TRIGGER_NAME
});
/* -------------------------------------------------------------------------------------------------
 * SelectValue
 * -----------------------------------------------------------------------------------------------*/ const $cc7e05a45900e73f$var$VALUE_NAME = 'SelectValue';
const $cc7e05a45900e73f$export$e288731fd71264f0 = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    // We ignore `className` and `style` as this part shouldn't be styled.
    const { __scopeSelect: __scopeSelect , className: className , style: style , children: children , placeholder: placeholder , ...valueProps } = props;
    const context = $cc7e05a45900e73f$var$useSelectContext($cc7e05a45900e73f$var$VALUE_NAME, __scopeSelect);
    const { onValueNodeHasChildrenChange: onValueNodeHasChildrenChange  } = context;
    const hasChildren = children !== undefined;
    const composedRefs = (0,react_compose_refs_dist/* useComposedRefs */.e)(forwardedRef, context.onValueNodeChange);
    (0,react_use_layout_effect_dist/* useLayoutEffect */.b)(()=>{
        onValueNodeHasChildrenChange(hasChildren);
    }, [
        onValueNodeHasChildrenChange,
        hasChildren
    ]);
    return /*#__PURE__*/ (0,react_.createElement)(react_primitive_dist/* Primitive */.WV.span, (0,esm_extends/* default */.Z)({}, valueProps, {
        ref: composedRefs // we don't want events from the portalled `SelectValue` children to bubble
        ,
        style: {
            pointerEvents: 'none'
        }
    }), context.value === undefined && placeholder !== undefined ? placeholder : children);
});
/*#__PURE__*/ Object.assign($cc7e05a45900e73f$export$e288731fd71264f0, {
    displayName: $cc7e05a45900e73f$var$VALUE_NAME
});
/* -------------------------------------------------------------------------------------------------
 * SelectIcon
 * -----------------------------------------------------------------------------------------------*/ const $cc7e05a45900e73f$var$ICON_NAME = 'SelectIcon';
const $cc7e05a45900e73f$export$99b400cabb58c515 = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const { __scopeSelect: __scopeSelect , children: children , ...iconProps } = props;
    return /*#__PURE__*/ (0,react_.createElement)(react_primitive_dist/* Primitive */.WV.span, (0,esm_extends/* default */.Z)({
        "aria-hidden": true
    }, iconProps, {
        ref: forwardedRef
    }), children || '▼');
});
/*#__PURE__*/ Object.assign($cc7e05a45900e73f$export$99b400cabb58c515, {
    displayName: $cc7e05a45900e73f$var$ICON_NAME
});
/* -------------------------------------------------------------------------------------------------
 * SelectPortal
 * -----------------------------------------------------------------------------------------------*/ const $cc7e05a45900e73f$var$PORTAL_NAME = 'SelectPortal';
const $cc7e05a45900e73f$export$b2af6c9944296213 = (props)=>{
    return /*#__PURE__*/ (0,react_.createElement)(react_portal_dist/* Portal */.h, (0,esm_extends/* default */.Z)({
        asChild: true
    }, props));
};
/*#__PURE__*/ Object.assign($cc7e05a45900e73f$export$b2af6c9944296213, {
    displayName: $cc7e05a45900e73f$var$PORTAL_NAME
});
/* -------------------------------------------------------------------------------------------------
 * SelectContent
 * -----------------------------------------------------------------------------------------------*/ const $cc7e05a45900e73f$var$CONTENT_NAME = 'SelectContent';
const $cc7e05a45900e73f$export$c973a4b3cb86a03d = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const context = $cc7e05a45900e73f$var$useSelectContext($cc7e05a45900e73f$var$CONTENT_NAME, props.__scopeSelect);
    const [fragment, setFragment] = (0,react_.useState)(); // setting the fragment in `useLayoutEffect` as `DocumentFragment` doesn't exist on the server
    (0,react_use_layout_effect_dist/* useLayoutEffect */.b)(()=>{
        setFragment(new DocumentFragment());
    }, []);
    if (!context.open) {
        const frag = fragment;
        return frag ? /*#__PURE__*/ (0,server_rendering_stub_.createPortal)(/*#__PURE__*/ (0,react_.createElement)($cc7e05a45900e73f$var$SelectContentProvider, {
            scope: props.__scopeSelect
        }, /*#__PURE__*/ (0,react_.createElement)($cc7e05a45900e73f$var$Collection.Slot, {
            scope: props.__scopeSelect
        }, /*#__PURE__*/ (0,react_.createElement)("div", null, props.children))), frag) : null;
    }
    return /*#__PURE__*/ (0,react_.createElement)($cc7e05a45900e73f$var$SelectContentImpl, (0,esm_extends/* default */.Z)({}, props, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($cc7e05a45900e73f$export$c973a4b3cb86a03d, {
    displayName: $cc7e05a45900e73f$var$CONTENT_NAME
});
/* -------------------------------------------------------------------------------------------------
 * SelectContentImpl
 * -----------------------------------------------------------------------------------------------*/ const $cc7e05a45900e73f$var$CONTENT_MARGIN = 10;
const [$cc7e05a45900e73f$var$SelectContentProvider, $cc7e05a45900e73f$var$useSelectContentContext] = $cc7e05a45900e73f$var$createSelectContext($cc7e05a45900e73f$var$CONTENT_NAME);
const $cc7e05a45900e73f$var$CONTENT_IMPL_NAME = 'SelectContentImpl';
const $cc7e05a45900e73f$var$SelectContentImpl = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const { __scopeSelect: __scopeSelect , position: position = 'item-aligned' , onCloseAutoFocus: onCloseAutoFocus , onEscapeKeyDown: onEscapeKeyDown , onPointerDownOutside: onPointerDownOutside , side: //
    // PopperContent props
    side , sideOffset: sideOffset , align: align , alignOffset: alignOffset , arrowPadding: arrowPadding , collisionBoundary: collisionBoundary , collisionPadding: collisionPadding , sticky: sticky , hideWhenDetached: hideWhenDetached , avoidCollisions: avoidCollisions , //
    ...contentProps } = props;
    const context = $cc7e05a45900e73f$var$useSelectContext($cc7e05a45900e73f$var$CONTENT_NAME, __scopeSelect);
    const [content, setContent] = (0,react_.useState)(null);
    const [viewport, setViewport] = (0,react_.useState)(null);
    const composedRefs = (0,react_compose_refs_dist/* useComposedRefs */.e)(forwardedRef, (node)=>setContent(node)
    );
    const [selectedItem, setSelectedItem] = (0,react_.useState)(null);
    const [selectedItemText, setSelectedItemText] = (0,react_.useState)(null);
    const getItems = $cc7e05a45900e73f$var$useCollection(__scopeSelect);
    const [isPositioned, setIsPositioned] = (0,react_.useState)(false);
    const firstValidItemFoundRef = (0,react_.useRef)(false); // aria-hide everything except the content (better supported equivalent to setting aria-modal)
    (0,react_.useEffect)(()=>{
        if (content) return (0,es5/* hideOthers */.Ry)(content);
    }, [
        content
    ]); // Make sure the whole tree has focus guards as our `Select` may be
    // the last element in the DOM (because of the `Portal`)
    (0,react_focus_guards_dist/* useFocusGuards */.EW)();
    const focusFirst = (0,react_.useCallback)((candidates)=>{
        const [firstItem, ...restItems] = getItems().map((item)=>item.ref.current
        );
        const [lastItem] = restItems.slice(-1);
        const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
        for (const candidate of candidates){
            // if focus is already where we want to go, we don't want to keep going through the candidates
            if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
            candidate === null || candidate === void 0 || candidate.scrollIntoView({
                block: 'nearest'
            }); // viewport might have padding so scroll to its edges when focusing first/last items.
            if (candidate === firstItem && viewport) viewport.scrollTop = 0;
            if (candidate === lastItem && viewport) viewport.scrollTop = viewport.scrollHeight;
            candidate === null || candidate === void 0 || candidate.focus();
            if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT) return;
        }
    }, [
        getItems,
        viewport
    ]);
    const focusSelectedItem = (0,react_.useCallback)(()=>focusFirst([
            selectedItem,
            content
        ])
    , [
        focusFirst,
        selectedItem,
        content
    ]); // Since this is not dependent on layout, we want to ensure this runs at the same time as
    // other effects across components. Hence why we don't call `focusSelectedItem` inside `position`.
    (0,react_.useEffect)(()=>{
        if (isPositioned) focusSelectedItem();
    }, [
        isPositioned,
        focusSelectedItem
    ]); // prevent selecting items on `pointerup` in some cases after opening from `pointerdown`
    // and close on `pointerup` outside.
    const { onOpenChange: onOpenChange , triggerPointerDownPosRef: triggerPointerDownPosRef  } = context;
    (0,react_.useEffect)(()=>{
        if (content) {
            let pointerMoveDelta = {
                x: 0,
                y: 0
            };
            const handlePointerMove = (event)=>{
                var _triggerPointerDownPo, _triggerPointerDownPo2, _triggerPointerDownPo3, _triggerPointerDownPo4;
                pointerMoveDelta = {
                    x: Math.abs(Math.round(event.pageX) - ((_triggerPointerDownPo = (_triggerPointerDownPo2 = triggerPointerDownPosRef.current) === null || _triggerPointerDownPo2 === void 0 ? void 0 : _triggerPointerDownPo2.x) !== null && _triggerPointerDownPo !== void 0 ? _triggerPointerDownPo : 0)),
                    y: Math.abs(Math.round(event.pageY) - ((_triggerPointerDownPo3 = (_triggerPointerDownPo4 = triggerPointerDownPosRef.current) === null || _triggerPointerDownPo4 === void 0 ? void 0 : _triggerPointerDownPo4.y) !== null && _triggerPointerDownPo3 !== void 0 ? _triggerPointerDownPo3 : 0))
                };
            };
            const handlePointerUp = (event)=>{
                // If the pointer hasn't moved by a certain threshold then we prevent selecting item on `pointerup`.
                if (pointerMoveDelta.x <= 10 && pointerMoveDelta.y <= 10) event.preventDefault();
                else // otherwise, if the event was outside the content, close.
                if (!content.contains(event.target)) onOpenChange(false);
                document.removeEventListener('pointermove', handlePointerMove);
                triggerPointerDownPosRef.current = null;
            };
            if (triggerPointerDownPosRef.current !== null) {
                document.addEventListener('pointermove', handlePointerMove);
                document.addEventListener('pointerup', handlePointerUp, {
                    capture: true,
                    once: true
                });
            }
            return ()=>{
                document.removeEventListener('pointermove', handlePointerMove);
                document.removeEventListener('pointerup', handlePointerUp, {
                    capture: true
                });
            };
        }
    }, [
        content,
        onOpenChange,
        triggerPointerDownPosRef
    ]);
    (0,react_.useEffect)(()=>{
        const close = ()=>onOpenChange(false)
        ;
        window.addEventListener('blur', close);
        window.addEventListener('resize', close);
        return ()=>{
            window.removeEventListener('blur', close);
            window.removeEventListener('resize', close);
        };
    }, [
        onOpenChange
    ]);
    const [searchRef, handleTypeaheadSearch] = $cc7e05a45900e73f$var$useTypeaheadSearch((search)=>{
        const enabledItems = getItems().filter((item)=>!item.disabled
        );
        const currentItem = enabledItems.find((item)=>item.ref.current === document.activeElement
        );
        const nextItem = $cc7e05a45900e73f$var$findNextItem(enabledItems, search, currentItem);
        if (nextItem) /**
       * Imperative focus during keydown is risky so we prevent React's batching updates
       * to avoid potential bugs. See: https://github.com/facebook/react/issues/20332
       */ setTimeout(()=>nextItem.ref.current.focus()
        );
    });
    const itemRefCallback = (0,react_.useCallback)((node, value, disabled)=>{
        const isFirstValidItem = !firstValidItemFoundRef.current && !disabled;
        const isSelectedItem = context.value !== undefined && context.value === value;
        if (isSelectedItem || isFirstValidItem) {
            setSelectedItem(node);
            if (isFirstValidItem) firstValidItemFoundRef.current = true;
        }
    }, [
        context.value
    ]);
    const handleItemLeave = (0,react_.useCallback)(()=>content === null || content === void 0 ? void 0 : content.focus()
    , [
        content
    ]);
    const itemTextRefCallback = (0,react_.useCallback)((node, value, disabled)=>{
        const isFirstValidItem = !firstValidItemFoundRef.current && !disabled;
        const isSelectedItem = context.value !== undefined && context.value === value;
        if (isSelectedItem || isFirstValidItem) setSelectedItemText(node);
    }, [
        context.value
    ]);
    const SelectPosition = position === 'popper' ? $cc7e05a45900e73f$var$SelectPopperPosition : $cc7e05a45900e73f$var$SelectItemAlignedPosition; // Silently ignore props that are not supported by `SelectItemAlignedPosition`
    const popperContentProps = SelectPosition === $cc7e05a45900e73f$var$SelectPopperPosition ? {
        side: side,
        sideOffset: sideOffset,
        align: align,
        alignOffset: alignOffset,
        arrowPadding: arrowPadding,
        collisionBoundary: collisionBoundary,
        collisionPadding: collisionPadding,
        sticky: sticky,
        hideWhenDetached: hideWhenDetached,
        avoidCollisions: avoidCollisions
    } : {};
    return /*#__PURE__*/ (0,react_.createElement)($cc7e05a45900e73f$var$SelectContentProvider, {
        scope: __scopeSelect,
        content: content,
        viewport: viewport,
        onViewportChange: setViewport,
        itemRefCallback: itemRefCallback,
        selectedItem: selectedItem,
        onItemLeave: handleItemLeave,
        itemTextRefCallback: itemTextRefCallback,
        focusSelectedItem: focusSelectedItem,
        selectedItemText: selectedItemText,
        position: position,
        isPositioned: isPositioned,
        searchRef: searchRef
    }, /*#__PURE__*/ (0,react_.createElement)(dist_es5/* RemoveScroll */.f, {
        as: react_slot_dist/* Slot */.g7,
        allowPinchZoom: true
    }, /*#__PURE__*/ (0,react_.createElement)(react_focus_scope_dist/* FocusScope */.M, {
        asChild: true // we make sure we're not trapping once it's been closed
        ,
        trapped: context.open,
        onMountAutoFocus: (event)=>{
            // we prevent open autofocus because we manually focus the selected item
            event.preventDefault();
        },
        onUnmountAutoFocus: (0,dist/* composeEventHandlers */.M)(onCloseAutoFocus, (event)=>{
            var _context$trigger;
            (_context$trigger = context.trigger) === null || _context$trigger === void 0 || _context$trigger.focus({
                preventScroll: true
            });
            event.preventDefault();
        })
    }, /*#__PURE__*/ (0,react_.createElement)(react_dismissable_layer_dist/* DismissableLayer */.XB, {
        asChild: true,
        disableOutsidePointerEvents: true,
        onEscapeKeyDown: onEscapeKeyDown,
        onPointerDownOutside: onPointerDownOutside // When focus is trapped, a focusout event may still happen.
        ,
        onFocusOutside: (event)=>event.preventDefault()
        ,
        onDismiss: ()=>context.onOpenChange(false)
    }, /*#__PURE__*/ (0,react_.createElement)(SelectPosition, (0,esm_extends/* default */.Z)({
        role: "listbox",
        id: context.contentId,
        "data-state": context.open ? 'open' : 'closed',
        dir: context.dir,
        onContextMenu: (event)=>event.preventDefault()
    }, contentProps, popperContentProps, {
        onPlaced: ()=>setIsPositioned(true)
        ,
        ref: composedRefs,
        style: {
            // flex layout so we can place the scroll buttons properly
            display: 'flex',
            flexDirection: 'column',
            // reset the outline by default as the content MAY get focused
            outline: 'none',
            ...contentProps.style
        },
        onKeyDown: (0,dist/* composeEventHandlers */.M)(contentProps.onKeyDown, (event)=>{
            const isModifierKey = event.ctrlKey || event.altKey || event.metaKey; // select should not be navigated using tab key so we prevent it
            if (event.key === 'Tab') event.preventDefault();
            if (!isModifierKey && event.key.length === 1) handleTypeaheadSearch(event.key);
            if ([
                'ArrowUp',
                'ArrowDown',
                'Home',
                'End'
            ].includes(event.key)) {
                const items = getItems().filter((item)=>!item.disabled
                );
                let candidateNodes = items.map((item)=>item.ref.current
                );
                if ([
                    'ArrowUp',
                    'End'
                ].includes(event.key)) candidateNodes = candidateNodes.slice().reverse();
                if ([
                    'ArrowUp',
                    'ArrowDown'
                ].includes(event.key)) {
                    const currentElement = event.target;
                    const currentIndex = candidateNodes.indexOf(currentElement);
                    candidateNodes = candidateNodes.slice(currentIndex + 1);
                }
                /**
         * Imperative focus during keydown is risky so we prevent React's batching updates
         * to avoid potential bugs. See: https://github.com/facebook/react/issues/20332
         */ setTimeout(()=>focusFirst(candidateNodes)
                );
                event.preventDefault();
            }
        })
    }))))));
});
/*#__PURE__*/ Object.assign($cc7e05a45900e73f$var$SelectContentImpl, {
    displayName: $cc7e05a45900e73f$var$CONTENT_IMPL_NAME
});
/* -------------------------------------------------------------------------------------------------
 * SelectItemAlignedPosition
 * -----------------------------------------------------------------------------------------------*/ const $cc7e05a45900e73f$var$ITEM_ALIGNED_POSITION_NAME = 'SelectItemAlignedPosition';
const $cc7e05a45900e73f$var$SelectItemAlignedPosition = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const { __scopeSelect: __scopeSelect , onPlaced: onPlaced , ...popperProps } = props;
    const context = $cc7e05a45900e73f$var$useSelectContext($cc7e05a45900e73f$var$CONTENT_NAME, __scopeSelect);
    const contentContext = $cc7e05a45900e73f$var$useSelectContentContext($cc7e05a45900e73f$var$CONTENT_NAME, __scopeSelect);
    const [contentWrapper, setContentWrapper] = (0,react_.useState)(null);
    const [content, setContent] = (0,react_.useState)(null);
    const composedRefs = (0,react_compose_refs_dist/* useComposedRefs */.e)(forwardedRef, (node)=>setContent(node)
    );
    const getItems = $cc7e05a45900e73f$var$useCollection(__scopeSelect);
    const shouldExpandOnScrollRef = (0,react_.useRef)(false);
    const shouldRepositionRef = (0,react_.useRef)(true);
    const { viewport: viewport , selectedItem: selectedItem , selectedItemText: selectedItemText , focusSelectedItem: focusSelectedItem  } = contentContext;
    const position = (0,react_.useCallback)(()=>{
        if (context.trigger && context.valueNode && contentWrapper && content && viewport && selectedItem && selectedItemText) {
            const triggerRect = context.trigger.getBoundingClientRect(); // -----------------------------------------------------------------------------------------
            //  Horizontal positioning
            // -----------------------------------------------------------------------------------------
            const contentRect = content.getBoundingClientRect();
            const valueNodeRect = context.valueNode.getBoundingClientRect();
            const itemTextRect = selectedItemText.getBoundingClientRect();
            if (context.dir !== 'rtl') {
                const itemTextOffset = itemTextRect.left - contentRect.left;
                const left = valueNodeRect.left - itemTextOffset;
                const leftDelta = triggerRect.left - left;
                const minContentWidth = triggerRect.width + leftDelta;
                const contentWidth = Math.max(minContentWidth, contentRect.width);
                const rightEdge = window.innerWidth - $cc7e05a45900e73f$var$CONTENT_MARGIN;
                const clampedLeft = $ae6933e535247d3d$export$7d15b64cf5a3a4c4(left, [
                    $cc7e05a45900e73f$var$CONTENT_MARGIN,
                    rightEdge - contentWidth
                ]);
                contentWrapper.style.minWidth = minContentWidth + 'px';
                contentWrapper.style.left = clampedLeft + 'px';
            } else {
                const itemTextOffset = contentRect.right - itemTextRect.right;
                const right = window.innerWidth - valueNodeRect.right - itemTextOffset;
                const rightDelta = window.innerWidth - triggerRect.right - right;
                const minContentWidth = triggerRect.width + rightDelta;
                const contentWidth = Math.max(minContentWidth, contentRect.width);
                const leftEdge = window.innerWidth - $cc7e05a45900e73f$var$CONTENT_MARGIN;
                const clampedRight = $ae6933e535247d3d$export$7d15b64cf5a3a4c4(right, [
                    $cc7e05a45900e73f$var$CONTENT_MARGIN,
                    leftEdge - contentWidth
                ]);
                contentWrapper.style.minWidth = minContentWidth + 'px';
                contentWrapper.style.right = clampedRight + 'px';
            } // -----------------------------------------------------------------------------------------
            // Vertical positioning
            // -----------------------------------------------------------------------------------------
            const items = getItems();
            const availableHeight = window.innerHeight - $cc7e05a45900e73f$var$CONTENT_MARGIN * 2;
            const itemsHeight = viewport.scrollHeight;
            const contentStyles = window.getComputedStyle(content);
            const contentBorderTopWidth = parseInt(contentStyles.borderTopWidth, 10);
            const contentPaddingTop = parseInt(contentStyles.paddingTop, 10);
            const contentBorderBottomWidth = parseInt(contentStyles.borderBottomWidth, 10);
            const contentPaddingBottom = parseInt(contentStyles.paddingBottom, 10);
            const fullContentHeight = contentBorderTopWidth + contentPaddingTop + itemsHeight + contentPaddingBottom + contentBorderBottomWidth; // prettier-ignore
            const minContentHeight = Math.min(selectedItem.offsetHeight * 5, fullContentHeight);
            const viewportStyles = window.getComputedStyle(viewport);
            const viewportPaddingTop = parseInt(viewportStyles.paddingTop, 10);
            const viewportPaddingBottom = parseInt(viewportStyles.paddingBottom, 10);
            const topEdgeToTriggerMiddle = triggerRect.top + triggerRect.height / 2 - $cc7e05a45900e73f$var$CONTENT_MARGIN;
            const triggerMiddleToBottomEdge = availableHeight - topEdgeToTriggerMiddle;
            const selectedItemHalfHeight = selectedItem.offsetHeight / 2;
            const itemOffsetMiddle = selectedItem.offsetTop + selectedItemHalfHeight;
            const contentTopToItemMiddle = contentBorderTopWidth + contentPaddingTop + itemOffsetMiddle;
            const itemMiddleToContentBottom = fullContentHeight - contentTopToItemMiddle;
            const willAlignWithoutTopOverflow = contentTopToItemMiddle <= topEdgeToTriggerMiddle;
            if (willAlignWithoutTopOverflow) {
                const isLastItem = selectedItem === items[items.length - 1].ref.current;
                contentWrapper.style.bottom = "0px";
                const viewportOffsetBottom = content.clientHeight - viewport.offsetTop - viewport.offsetHeight;
                const clampedTriggerMiddleToBottomEdge = Math.max(triggerMiddleToBottomEdge, selectedItemHalfHeight + (isLastItem ? viewportPaddingBottom : 0) + viewportOffsetBottom + contentBorderBottomWidth);
                const height = contentTopToItemMiddle + clampedTriggerMiddleToBottomEdge;
                contentWrapper.style.height = height + 'px';
            } else {
                const isFirstItem = selectedItem === items[0].ref.current;
                contentWrapper.style.top = "0px";
                const clampedTopEdgeToTriggerMiddle = Math.max(topEdgeToTriggerMiddle, contentBorderTopWidth + viewport.offsetTop + (isFirstItem ? viewportPaddingTop : 0) + selectedItemHalfHeight);
                const height = clampedTopEdgeToTriggerMiddle + itemMiddleToContentBottom;
                contentWrapper.style.height = height + 'px';
                viewport.scrollTop = contentTopToItemMiddle - topEdgeToTriggerMiddle + viewport.offsetTop;
            }
            contentWrapper.style.margin = `${$cc7e05a45900e73f$var$CONTENT_MARGIN}px 0`;
            contentWrapper.style.minHeight = minContentHeight + 'px';
            contentWrapper.style.maxHeight = availableHeight + 'px'; // -----------------------------------------------------------------------------------------
            onPlaced === null || onPlaced === void 0 || onPlaced(); // we don't want the initial scroll position adjustment to trigger "expand on scroll"
            // so we explicitly turn it on only after they've registered.
            requestAnimationFrame(()=>shouldExpandOnScrollRef.current = true
            );
        }
    }, [
        getItems,
        context.trigger,
        context.valueNode,
        contentWrapper,
        content,
        viewport,
        selectedItem,
        selectedItemText,
        context.dir,
        onPlaced
    ]);
    (0,react_use_layout_effect_dist/* useLayoutEffect */.b)(()=>position()
    , [
        position
    ]); // copy z-index from content to wrapper
    const [contentZIndex, setContentZIndex] = (0,react_.useState)();
    (0,react_use_layout_effect_dist/* useLayoutEffect */.b)(()=>{
        if (content) setContentZIndex(window.getComputedStyle(content).zIndex);
    }, [
        content
    ]); // When the viewport becomes scrollable at the top, the scroll up button will mount.
    // Because it is part of the normal flow, it will push down the viewport, thus throwing our
    // trigger => selectedItem alignment off by the amount the viewport was pushed down.
    // We wait for this to happen and then re-run the positining logic one more time to account for it.
    const handleScrollButtonChange = (0,react_.useCallback)((node)=>{
        if (node && shouldRepositionRef.current === true) {
            position();
            focusSelectedItem === null || focusSelectedItem === void 0 || focusSelectedItem();
            shouldRepositionRef.current = false;
        }
    }, [
        position,
        focusSelectedItem
    ]);
    return /*#__PURE__*/ (0,react_.createElement)($cc7e05a45900e73f$var$SelectViewportProvider, {
        scope: __scopeSelect,
        contentWrapper: contentWrapper,
        shouldExpandOnScrollRef: shouldExpandOnScrollRef,
        onScrollButtonChange: handleScrollButtonChange
    }, /*#__PURE__*/ (0,react_.createElement)("div", {
        ref: setContentWrapper,
        style: {
            display: 'flex',
            flexDirection: 'column',
            position: 'fixed',
            zIndex: contentZIndex
        }
    }, /*#__PURE__*/ (0,react_.createElement)(react_primitive_dist/* Primitive */.WV.div, (0,esm_extends/* default */.Z)({}, popperProps, {
        ref: composedRefs,
        style: {
            // When we get the height of the content, it includes borders. If we were to set
            // the height without having `boxSizing: 'border-box'` it would be too big.
            boxSizing: 'border-box',
            // We need to ensure the content doesn't get taller than the wrapper
            maxHeight: '100%',
            ...popperProps.style
        }
    }))));
});
/*#__PURE__*/ Object.assign($cc7e05a45900e73f$var$SelectItemAlignedPosition, {
    displayName: $cc7e05a45900e73f$var$ITEM_ALIGNED_POSITION_NAME
});
/* -------------------------------------------------------------------------------------------------
 * SelectPopperPosition
 * -----------------------------------------------------------------------------------------------*/ const $cc7e05a45900e73f$var$POPPER_POSITION_NAME = 'SelectPopperPosition';
const $cc7e05a45900e73f$var$SelectPopperPosition = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const { __scopeSelect: __scopeSelect , align: align = 'start' , collisionPadding: collisionPadding = $cc7e05a45900e73f$var$CONTENT_MARGIN , ...popperProps } = props;
    const popperScope = $cc7e05a45900e73f$var$usePopperScope(__scopeSelect);
    return /*#__PURE__*/ (0,react_.createElement)($cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2, (0,esm_extends/* default */.Z)({}, popperScope, popperProps, {
        ref: forwardedRef,
        align: align,
        collisionPadding: collisionPadding,
        style: {
            // Ensure border-box for floating-ui calculations
            boxSizing: 'border-box',
            ...popperProps.style,
            '--radix-select-content-transform-origin': 'var(--radix-popper-transform-origin)',
            '--radix-select-content-available-width': 'var(--radix-popper-available-width)',
            '--radix-select-content-available-height': 'var(--radix-popper-available-height)',
            '--radix-select-trigger-width': 'var(--radix-popper-anchor-width)',
            '--radix-select-trigger-height': 'var(--radix-popper-anchor-height)'
        }
    }));
});
/*#__PURE__*/ Object.assign($cc7e05a45900e73f$var$SelectPopperPosition, {
    displayName: $cc7e05a45900e73f$var$POPPER_POSITION_NAME
});
/* -------------------------------------------------------------------------------------------------
 * SelectViewport
 * -----------------------------------------------------------------------------------------------*/ const [$cc7e05a45900e73f$var$SelectViewportProvider, $cc7e05a45900e73f$var$useSelectViewportContext] = $cc7e05a45900e73f$var$createSelectContext($cc7e05a45900e73f$var$CONTENT_NAME, {});
const $cc7e05a45900e73f$var$VIEWPORT_NAME = 'SelectViewport';
const $cc7e05a45900e73f$export$9ed6e7b40248d36d = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const { __scopeSelect: __scopeSelect , ...viewportProps } = props;
    const contentContext = $cc7e05a45900e73f$var$useSelectContentContext($cc7e05a45900e73f$var$VIEWPORT_NAME, __scopeSelect);
    const viewportContext = $cc7e05a45900e73f$var$useSelectViewportContext($cc7e05a45900e73f$var$VIEWPORT_NAME, __scopeSelect);
    const composedRefs = (0,react_compose_refs_dist/* useComposedRefs */.e)(forwardedRef, contentContext.onViewportChange);
    const prevScrollTopRef = (0,react_.useRef)(0);
    return /*#__PURE__*/ (0,react_.createElement)(react_.Fragment, null, /*#__PURE__*/ (0,react_.createElement)("style", {
        dangerouslySetInnerHTML: {
            __html: `[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}`
        }
    }), /*#__PURE__*/ (0,react_.createElement)($cc7e05a45900e73f$var$Collection.Slot, {
        scope: __scopeSelect
    }, /*#__PURE__*/ (0,react_.createElement)(react_primitive_dist/* Primitive */.WV.div, (0,esm_extends/* default */.Z)({
        "data-radix-select-viewport": "",
        role: "presentation"
    }, viewportProps, {
        ref: composedRefs,
        style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: 'relative',
            flex: 1,
            overflow: 'auto',
            ...viewportProps.style
        },
        onScroll: (0,dist/* composeEventHandlers */.M)(viewportProps.onScroll, (event)=>{
            const viewport = event.currentTarget;
            const { contentWrapper: contentWrapper , shouldExpandOnScrollRef: shouldExpandOnScrollRef  } = viewportContext;
            if (shouldExpandOnScrollRef !== null && shouldExpandOnScrollRef !== void 0 && shouldExpandOnScrollRef.current && contentWrapper) {
                const scrolledBy = Math.abs(prevScrollTopRef.current - viewport.scrollTop);
                if (scrolledBy > 0) {
                    const availableHeight = window.innerHeight - $cc7e05a45900e73f$var$CONTENT_MARGIN * 2;
                    const cssMinHeight = parseFloat(contentWrapper.style.minHeight);
                    const cssHeight = parseFloat(contentWrapper.style.height);
                    const prevHeight = Math.max(cssMinHeight, cssHeight);
                    if (prevHeight < availableHeight) {
                        const nextHeight = prevHeight + scrolledBy;
                        const clampedNextHeight = Math.min(availableHeight, nextHeight);
                        const heightDiff = nextHeight - clampedNextHeight;
                        contentWrapper.style.height = clampedNextHeight + 'px';
                        if (contentWrapper.style.bottom === '0px') {
                            viewport.scrollTop = heightDiff > 0 ? heightDiff : 0; // ensure the content stays pinned to the bottom
                            contentWrapper.style.justifyContent = 'flex-end';
                        }
                    }
                }
            }
            prevScrollTopRef.current = viewport.scrollTop;
        })
    }))));
});
/*#__PURE__*/ Object.assign($cc7e05a45900e73f$export$9ed6e7b40248d36d, {
    displayName: $cc7e05a45900e73f$var$VIEWPORT_NAME
});
/* -------------------------------------------------------------------------------------------------
 * SelectGroup
 * -----------------------------------------------------------------------------------------------*/ const $cc7e05a45900e73f$var$GROUP_NAME = 'SelectGroup';
const [$cc7e05a45900e73f$var$SelectGroupContextProvider, $cc7e05a45900e73f$var$useSelectGroupContext] = $cc7e05a45900e73f$var$createSelectContext($cc7e05a45900e73f$var$GROUP_NAME);
const $cc7e05a45900e73f$export$ee25a334c55de1f4 = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const { __scopeSelect: __scopeSelect , ...groupProps } = props;
    const groupId = (0,react_id_dist/* useId */.M)();
    return /*#__PURE__*/ (0,react_.createElement)($cc7e05a45900e73f$var$SelectGroupContextProvider, {
        scope: __scopeSelect,
        id: groupId
    }, /*#__PURE__*/ (0,react_.createElement)(react_primitive_dist/* Primitive */.WV.div, (0,esm_extends/* default */.Z)({
        role: "group",
        "aria-labelledby": groupId
    }, groupProps, {
        ref: forwardedRef
    })));
});
/*#__PURE__*/ Object.assign($cc7e05a45900e73f$export$ee25a334c55de1f4, {
    displayName: $cc7e05a45900e73f$var$GROUP_NAME
});
/* -------------------------------------------------------------------------------------------------
 * SelectLabel
 * -----------------------------------------------------------------------------------------------*/ const $cc7e05a45900e73f$var$LABEL_NAME = 'SelectLabel';
const $cc7e05a45900e73f$export$f67338d29bd972f8 = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const { __scopeSelect: __scopeSelect , ...labelProps } = props;
    const groupContext = $cc7e05a45900e73f$var$useSelectGroupContext($cc7e05a45900e73f$var$LABEL_NAME, __scopeSelect);
    return /*#__PURE__*/ (0,react_.createElement)(react_primitive_dist/* Primitive */.WV.div, (0,esm_extends/* default */.Z)({
        id: groupContext.id
    }, labelProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($cc7e05a45900e73f$export$f67338d29bd972f8, {
    displayName: $cc7e05a45900e73f$var$LABEL_NAME
});
/* -------------------------------------------------------------------------------------------------
 * SelectItem
 * -----------------------------------------------------------------------------------------------*/ const $cc7e05a45900e73f$var$ITEM_NAME = 'SelectItem';
const [$cc7e05a45900e73f$var$SelectItemContextProvider, $cc7e05a45900e73f$var$useSelectItemContext] = $cc7e05a45900e73f$var$createSelectContext($cc7e05a45900e73f$var$ITEM_NAME);
const $cc7e05a45900e73f$export$13ef48a934230896 = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const { __scopeSelect: __scopeSelect , value: value , disabled: disabled = false , textValue: textValueProp , ...itemProps } = props;
    const context = $cc7e05a45900e73f$var$useSelectContext($cc7e05a45900e73f$var$ITEM_NAME, __scopeSelect);
    const contentContext = $cc7e05a45900e73f$var$useSelectContentContext($cc7e05a45900e73f$var$ITEM_NAME, __scopeSelect);
    const isSelected = context.value === value;
    const [textValue, setTextValue] = (0,react_.useState)(textValueProp !== null && textValueProp !== void 0 ? textValueProp : '');
    const [isFocused, setIsFocused] = (0,react_.useState)(false);
    const composedRefs = (0,react_compose_refs_dist/* useComposedRefs */.e)(forwardedRef, (node)=>{
        var _contentContext$itemR;
        return (_contentContext$itemR = contentContext.itemRefCallback) === null || _contentContext$itemR === void 0 ? void 0 : _contentContext$itemR.call(contentContext, node, value, disabled);
    });
    const textId = (0,react_id_dist/* useId */.M)();
    const handleSelect = ()=>{
        if (!disabled) {
            context.onValueChange(value);
            context.onOpenChange(false);
        }
    };
    return /*#__PURE__*/ (0,react_.createElement)($cc7e05a45900e73f$var$SelectItemContextProvider, {
        scope: __scopeSelect,
        value: value,
        disabled: disabled,
        textId: textId,
        isSelected: isSelected,
        onItemTextChange: (0,react_.useCallback)((node)=>{
            setTextValue((prevTextValue)=>{
                var _node$textContent;
                return prevTextValue || ((_node$textContent = node === null || node === void 0 ? void 0 : node.textContent) !== null && _node$textContent !== void 0 ? _node$textContent : '').trim();
            });
        }, [])
    }, /*#__PURE__*/ (0,react_.createElement)($cc7e05a45900e73f$var$Collection.ItemSlot, {
        scope: __scopeSelect,
        value: value,
        disabled: disabled,
        textValue: textValue
    }, /*#__PURE__*/ (0,react_.createElement)(react_primitive_dist/* Primitive */.WV.div, (0,esm_extends/* default */.Z)({
        role: "option",
        "aria-labelledby": textId,
        "data-highlighted": isFocused ? '' : undefined // `isFocused` caveat fixes stuttering in VoiceOver
        ,
        "aria-selected": isSelected && isFocused,
        "data-state": isSelected ? 'checked' : 'unchecked',
        "aria-disabled": disabled || undefined,
        "data-disabled": disabled ? '' : undefined,
        tabIndex: disabled ? undefined : -1
    }, itemProps, {
        ref: composedRefs,
        onFocus: (0,dist/* composeEventHandlers */.M)(itemProps.onFocus, ()=>setIsFocused(true)
        ),
        onBlur: (0,dist/* composeEventHandlers */.M)(itemProps.onBlur, ()=>setIsFocused(false)
        ),
        onPointerUp: (0,dist/* composeEventHandlers */.M)(itemProps.onPointerUp, handleSelect),
        onPointerMove: (0,dist/* composeEventHandlers */.M)(itemProps.onPointerMove, (event)=>{
            if (disabled) {
                var _contentContext$onIte;
                (_contentContext$onIte = contentContext.onItemLeave) === null || _contentContext$onIte === void 0 || _contentContext$onIte.call(contentContext);
            } else // even though safari doesn't support this option, it's acceptable
            // as it only means it might scroll a few pixels when using the pointer.
            event.currentTarget.focus({
                preventScroll: true
            });
        }),
        onPointerLeave: (0,dist/* composeEventHandlers */.M)(itemProps.onPointerLeave, (event)=>{
            if (event.currentTarget === document.activeElement) {
                var _contentContext$onIte2;
                (_contentContext$onIte2 = contentContext.onItemLeave) === null || _contentContext$onIte2 === void 0 || _contentContext$onIte2.call(contentContext);
            }
        }),
        onKeyDown: (0,dist/* composeEventHandlers */.M)(itemProps.onKeyDown, (event)=>{
            var _contentContext$searc;
            const isTypingAhead = ((_contentContext$searc = contentContext.searchRef) === null || _contentContext$searc === void 0 ? void 0 : _contentContext$searc.current) !== '';
            if (isTypingAhead && event.key === ' ') return;
            if ($cc7e05a45900e73f$var$SELECTION_KEYS.includes(event.key)) handleSelect(); // prevent page scroll if using the space key to select an item
            if (event.key === ' ') event.preventDefault();
        })
    }))));
});
/*#__PURE__*/ Object.assign($cc7e05a45900e73f$export$13ef48a934230896, {
    displayName: $cc7e05a45900e73f$var$ITEM_NAME
});
/* -------------------------------------------------------------------------------------------------
 * SelectItemText
 * -----------------------------------------------------------------------------------------------*/ const $cc7e05a45900e73f$var$ITEM_TEXT_NAME = 'SelectItemText';
const $cc7e05a45900e73f$export$3572fb0fb821ff49 = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    // We ignore `className` and `style` as this part shouldn't be styled.
    const { __scopeSelect: __scopeSelect , className: className , style: style , ...itemTextProps } = props;
    const context = $cc7e05a45900e73f$var$useSelectContext($cc7e05a45900e73f$var$ITEM_TEXT_NAME, __scopeSelect);
    const contentContext = $cc7e05a45900e73f$var$useSelectContentContext($cc7e05a45900e73f$var$ITEM_TEXT_NAME, __scopeSelect);
    const itemContext = $cc7e05a45900e73f$var$useSelectItemContext($cc7e05a45900e73f$var$ITEM_TEXT_NAME, __scopeSelect);
    const nativeOptionsContext = $cc7e05a45900e73f$var$useSelectNativeOptionsContext($cc7e05a45900e73f$var$ITEM_TEXT_NAME, __scopeSelect);
    const [itemTextNode, setItemTextNode] = (0,react_.useState)(null);
    const composedRefs = (0,react_compose_refs_dist/* useComposedRefs */.e)(forwardedRef, (node)=>setItemTextNode(node)
    , itemContext.onItemTextChange, (node)=>{
        var _contentContext$itemT;
        return (_contentContext$itemT = contentContext.itemTextRefCallback) === null || _contentContext$itemT === void 0 ? void 0 : _contentContext$itemT.call(contentContext, node, itemContext.value, itemContext.disabled);
    });
    const textContent = itemTextNode === null || itemTextNode === void 0 ? void 0 : itemTextNode.textContent;
    const nativeOption = (0,react_.useMemo)(()=>/*#__PURE__*/ (0,react_.createElement)("option", {
            key: itemContext.value,
            value: itemContext.value,
            disabled: itemContext.disabled
        }, textContent)
    , [
        itemContext.disabled,
        itemContext.value,
        textContent
    ]);
    const { onNativeOptionAdd: onNativeOptionAdd , onNativeOptionRemove: onNativeOptionRemove  } = nativeOptionsContext;
    (0,react_use_layout_effect_dist/* useLayoutEffect */.b)(()=>{
        onNativeOptionAdd(nativeOption);
        return ()=>onNativeOptionRemove(nativeOption)
        ;
    }, [
        onNativeOptionAdd,
        onNativeOptionRemove,
        nativeOption
    ]);
    return /*#__PURE__*/ (0,react_.createElement)(react_.Fragment, null, /*#__PURE__*/ (0,react_.createElement)(react_primitive_dist/* Primitive */.WV.span, (0,esm_extends/* default */.Z)({
        id: itemContext.textId
    }, itemTextProps, {
        ref: composedRefs
    })), itemContext.isSelected && context.valueNode && !context.valueNodeHasChildren ? /*#__PURE__*/ (0,server_rendering_stub_.createPortal)(itemTextProps.children, context.valueNode) : null);
});
/*#__PURE__*/ Object.assign($cc7e05a45900e73f$export$3572fb0fb821ff49, {
    displayName: $cc7e05a45900e73f$var$ITEM_TEXT_NAME
});
/* -------------------------------------------------------------------------------------------------
 * SelectItemIndicator
 * -----------------------------------------------------------------------------------------------*/ const $cc7e05a45900e73f$var$ITEM_INDICATOR_NAME = 'SelectItemIndicator';
const $cc7e05a45900e73f$export$6b9198de19accfe6 = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const { __scopeSelect: __scopeSelect , ...itemIndicatorProps } = props;
    const itemContext = $cc7e05a45900e73f$var$useSelectItemContext($cc7e05a45900e73f$var$ITEM_INDICATOR_NAME, __scopeSelect);
    return itemContext.isSelected ? /*#__PURE__*/ (0,react_.createElement)(react_primitive_dist/* Primitive */.WV.span, (0,esm_extends/* default */.Z)({
        "aria-hidden": true
    }, itemIndicatorProps, {
        ref: forwardedRef
    })) : null;
});
/*#__PURE__*/ Object.assign($cc7e05a45900e73f$export$6b9198de19accfe6, {
    displayName: $cc7e05a45900e73f$var$ITEM_INDICATOR_NAME
});
/* -------------------------------------------------------------------------------------------------
 * SelectScrollUpButton
 * -----------------------------------------------------------------------------------------------*/ const $cc7e05a45900e73f$var$SCROLL_UP_BUTTON_NAME = 'SelectScrollUpButton';
const $cc7e05a45900e73f$export$d8117927658af6d7 = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const contentContext = $cc7e05a45900e73f$var$useSelectContentContext($cc7e05a45900e73f$var$SCROLL_UP_BUTTON_NAME, props.__scopeSelect);
    const viewportContext = $cc7e05a45900e73f$var$useSelectViewportContext($cc7e05a45900e73f$var$SCROLL_UP_BUTTON_NAME, props.__scopeSelect);
    const [canScrollUp1, setCanScrollUp] = (0,react_.useState)(false);
    const composedRefs = (0,react_compose_refs_dist/* useComposedRefs */.e)(forwardedRef, viewportContext.onScrollButtonChange);
    (0,react_use_layout_effect_dist/* useLayoutEffect */.b)(()=>{
        if (contentContext.viewport && contentContext.isPositioned) {
            const viewport = contentContext.viewport;
            function handleScroll() {
                const canScrollUp = viewport.scrollTop > 0;
                setCanScrollUp(canScrollUp);
            }
            handleScroll();
            viewport.addEventListener('scroll', handleScroll);
            return ()=>viewport.removeEventListener('scroll', handleScroll)
            ;
        }
    }, [
        contentContext.viewport,
        contentContext.isPositioned
    ]);
    return canScrollUp1 ? /*#__PURE__*/ (0,react_.createElement)($cc7e05a45900e73f$var$SelectScrollButtonImpl, (0,esm_extends/* default */.Z)({}, props, {
        ref: composedRefs,
        onAutoScroll: ()=>{
            const { viewport: viewport , selectedItem: selectedItem  } = contentContext;
            if (viewport && selectedItem) viewport.scrollTop = viewport.scrollTop - selectedItem.offsetHeight;
        }
    })) : null;
});
/*#__PURE__*/ Object.assign($cc7e05a45900e73f$export$d8117927658af6d7, {
    displayName: $cc7e05a45900e73f$var$SCROLL_UP_BUTTON_NAME
});
/* -------------------------------------------------------------------------------------------------
 * SelectScrollDownButton
 * -----------------------------------------------------------------------------------------------*/ const $cc7e05a45900e73f$var$SCROLL_DOWN_BUTTON_NAME = 'SelectScrollDownButton';
const $cc7e05a45900e73f$export$ff951e476c12189 = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const contentContext = $cc7e05a45900e73f$var$useSelectContentContext($cc7e05a45900e73f$var$SCROLL_DOWN_BUTTON_NAME, props.__scopeSelect);
    const viewportContext = $cc7e05a45900e73f$var$useSelectViewportContext($cc7e05a45900e73f$var$SCROLL_DOWN_BUTTON_NAME, props.__scopeSelect);
    const [canScrollDown1, setCanScrollDown] = (0,react_.useState)(false);
    const composedRefs = (0,react_compose_refs_dist/* useComposedRefs */.e)(forwardedRef, viewportContext.onScrollButtonChange);
    (0,react_use_layout_effect_dist/* useLayoutEffect */.b)(()=>{
        if (contentContext.viewport && contentContext.isPositioned) {
            const viewport = contentContext.viewport;
            function handleScroll() {
                const maxScroll = viewport.scrollHeight - viewport.clientHeight; // we use Math.ceil here because if the UI is zoomed-in
                // `scrollTop` is not always reported as an integer
                const canScrollDown = Math.ceil(viewport.scrollTop) < maxScroll;
                setCanScrollDown(canScrollDown);
            }
            handleScroll();
            viewport.addEventListener('scroll', handleScroll);
            return ()=>viewport.removeEventListener('scroll', handleScroll)
            ;
        }
    }, [
        contentContext.viewport,
        contentContext.isPositioned
    ]);
    return canScrollDown1 ? /*#__PURE__*/ (0,react_.createElement)($cc7e05a45900e73f$var$SelectScrollButtonImpl, (0,esm_extends/* default */.Z)({}, props, {
        ref: composedRefs,
        onAutoScroll: ()=>{
            const { viewport: viewport , selectedItem: selectedItem  } = contentContext;
            if (viewport && selectedItem) viewport.scrollTop = viewport.scrollTop + selectedItem.offsetHeight;
        }
    })) : null;
});
/*#__PURE__*/ Object.assign($cc7e05a45900e73f$export$ff951e476c12189, {
    displayName: $cc7e05a45900e73f$var$SCROLL_DOWN_BUTTON_NAME
});
const $cc7e05a45900e73f$var$SelectScrollButtonImpl = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const { __scopeSelect: __scopeSelect , onAutoScroll: onAutoScroll , ...scrollIndicatorProps } = props;
    const contentContext = $cc7e05a45900e73f$var$useSelectContentContext('SelectScrollButton', __scopeSelect);
    const autoScrollTimerRef = (0,react_.useRef)(null);
    const getItems = $cc7e05a45900e73f$var$useCollection(__scopeSelect);
    const clearAutoScrollTimer = (0,react_.useCallback)(()=>{
        if (autoScrollTimerRef.current !== null) {
            window.clearInterval(autoScrollTimerRef.current);
            autoScrollTimerRef.current = null;
        }
    }, []);
    (0,react_.useEffect)(()=>{
        return ()=>clearAutoScrollTimer()
        ;
    }, [
        clearAutoScrollTimer
    ]); // When the viewport becomes scrollable on either side, the relevant scroll button will mount.
    // Because it is part of the normal flow, it will push down (top button) or shrink (bottom button)
    // the viewport, potentially causing the active item to now be partially out of view.
    // We re-run the `scrollIntoView` logic to make sure it stays within the viewport.
    (0,react_use_layout_effect_dist/* useLayoutEffect */.b)(()=>{
        var _activeItem$ref$curre;
        const activeItem = getItems().find((item)=>item.ref.current === document.activeElement
        );
        activeItem === null || activeItem === void 0 || (_activeItem$ref$curre = activeItem.ref.current) === null || _activeItem$ref$curre === void 0 || _activeItem$ref$curre.scrollIntoView({
            block: 'nearest'
        });
    }, [
        getItems
    ]);
    return /*#__PURE__*/ (0,react_.createElement)(react_primitive_dist/* Primitive */.WV.div, (0,esm_extends/* default */.Z)({
        "aria-hidden": true
    }, scrollIndicatorProps, {
        ref: forwardedRef,
        style: {
            flexShrink: 0,
            ...scrollIndicatorProps.style
        },
        onPointerDown: (0,dist/* composeEventHandlers */.M)(scrollIndicatorProps.onPointerDown, ()=>{
            if (autoScrollTimerRef.current === null) autoScrollTimerRef.current = window.setInterval(onAutoScroll, 50);
        }),
        onPointerMove: (0,dist/* composeEventHandlers */.M)(scrollIndicatorProps.onPointerMove, ()=>{
            var _contentContext$onIte3;
            (_contentContext$onIte3 = contentContext.onItemLeave) === null || _contentContext$onIte3 === void 0 || _contentContext$onIte3.call(contentContext);
            if (autoScrollTimerRef.current === null) autoScrollTimerRef.current = window.setInterval(onAutoScroll, 50);
        }),
        onPointerLeave: (0,dist/* composeEventHandlers */.M)(scrollIndicatorProps.onPointerLeave, ()=>{
            clearAutoScrollTimer();
        })
    }));
});
/* -------------------------------------------------------------------------------------------------
 * SelectSeparator
 * -----------------------------------------------------------------------------------------------*/ const $cc7e05a45900e73f$var$SEPARATOR_NAME = 'SelectSeparator';
const $cc7e05a45900e73f$export$eba4b1df07cb1d3 = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const { __scopeSelect: __scopeSelect , ...separatorProps } = props;
    return /*#__PURE__*/ (0,react_.createElement)(react_primitive_dist/* Primitive */.WV.div, (0,esm_extends/* default */.Z)({
        "aria-hidden": true
    }, separatorProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($cc7e05a45900e73f$export$eba4b1df07cb1d3, {
    displayName: $cc7e05a45900e73f$var$SEPARATOR_NAME
});
/* -------------------------------------------------------------------------------------------------
 * SelectArrow
 * -----------------------------------------------------------------------------------------------*/ const $cc7e05a45900e73f$var$ARROW_NAME = 'SelectArrow';
const $cc7e05a45900e73f$export$314f4cb8f8099628 = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const { __scopeSelect: __scopeSelect , ...arrowProps } = props;
    const popperScope = $cc7e05a45900e73f$var$usePopperScope(__scopeSelect);
    const context = $cc7e05a45900e73f$var$useSelectContext($cc7e05a45900e73f$var$ARROW_NAME, __scopeSelect);
    const contentContext = $cc7e05a45900e73f$var$useSelectContentContext($cc7e05a45900e73f$var$ARROW_NAME, __scopeSelect);
    return context.open && contentContext.position === 'popper' ? /*#__PURE__*/ (0,react_.createElement)($cf1ac5d9fe0e8206$export$21b07c8f274aebd5, (0,esm_extends/* default */.Z)({}, popperScope, arrowProps, {
        ref: forwardedRef
    })) : null;
});
/*#__PURE__*/ Object.assign($cc7e05a45900e73f$export$314f4cb8f8099628, {
    displayName: $cc7e05a45900e73f$var$ARROW_NAME
});
/* -----------------------------------------------------------------------------------------------*/ const $cc7e05a45900e73f$var$BubbleSelect = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const { value: value , ...selectProps } = props;
    const ref = (0,react_.useRef)(null);
    const composedRefs = (0,react_compose_refs_dist/* useComposedRefs */.e)(forwardedRef, ref);
    const prevValue = $010c2913dbd2fe3d$export$5cae361ad82dce8b(value); // Bubble value change to parents (e.g form change event)
    (0,react_.useEffect)(()=>{
        const select = ref.current;
        const selectProto = window.HTMLSelectElement.prototype;
        const descriptor = Object.getOwnPropertyDescriptor(selectProto, 'value');
        const setValue = descriptor.set;
        if (prevValue !== value && setValue) {
            const event = new Event('change', {
                bubbles: true
            });
            setValue.call(select, value);
            select.dispatchEvent(event);
        }
    }, [
        prevValue,
        value
    ]);
    /**
   * We purposefully use a `select` here to support form autofill as much
   * as possible.
   *
   * We purposefully do not add the `value` attribute here to allow the value
   * to be set programatically and bubble to any parent form `onChange` event.
   * Adding the `value` will cause React to consider the programatic
   * dispatch a duplicate and it will get swallowed.
   *
   * We use `VisuallyHidden` rather than `display: "none"` because Safari autofill
   * won't work otherwise.
   */ return /*#__PURE__*/ (0,react_.createElement)($ea1ef594cf570d83$export$439d29a4e110a164, {
        asChild: true
    }, /*#__PURE__*/ (0,react_.createElement)("select", (0,esm_extends/* default */.Z)({}, selectProps, {
        ref: composedRefs,
        defaultValue: value
    })));
});
$cc7e05a45900e73f$var$BubbleSelect.displayName = 'BubbleSelect';
function $cc7e05a45900e73f$var$useTypeaheadSearch(onSearchChange) {
    const handleSearchChange = (0,react_use_callback_ref_dist/* useCallbackRef */.W)(onSearchChange);
    const searchRef = (0,react_.useRef)('');
    const timerRef = (0,react_.useRef)(0);
    const handleTypeaheadSearch = (0,react_.useCallback)((key)=>{
        const search = searchRef.current + key;
        handleSearchChange(search);
        (function updateSearch(value) {
            searchRef.current = value;
            window.clearTimeout(timerRef.current); // Reset `searchRef` 1 second after it was last updated
            if (value !== '') timerRef.current = window.setTimeout(()=>updateSearch('')
            , 1000);
        })(search);
    }, [
        handleSearchChange
    ]);
    const resetTypeahead = (0,react_.useCallback)(()=>{
        searchRef.current = '';
        window.clearTimeout(timerRef.current);
    }, []);
    (0,react_.useEffect)(()=>{
        return ()=>window.clearTimeout(timerRef.current)
        ;
    }, []);
    return [
        searchRef,
        handleTypeaheadSearch,
        resetTypeahead
    ];
}
/**
 * This is the "meat" of the typeahead matching logic. It takes in a list of items,
 * the search and the current item, and returns the next item (or `undefined`).
 *
 * We normalize the search because if a user has repeatedly pressed a character,
 * we want the exact same behavior as if we only had that one character
 * (ie. cycle through items starting with that character)
 *
 * We also reorder the items by wrapping the array around the current item.
 * This is so we always look forward from the current item, and picking the first
 * item will always be the correct one.
 *
 * Finally, if the normalized search is exactly one character, we exclude the
 * current item from the values because otherwise it would be the first to match always
 * and focus would never move. This is as opposed to the regular case, where we
 * don't want focus to move if the current item still matches.
 */ function $cc7e05a45900e73f$var$findNextItem(items, search, currentItem) {
    const isRepeated = search.length > 1 && Array.from(search).every((char)=>char === search[0]
    );
    const normalizedSearch = isRepeated ? search[0] : search;
    const currentItemIndex = currentItem ? items.indexOf(currentItem) : -1;
    let wrappedItems = $cc7e05a45900e73f$var$wrapArray(items, Math.max(currentItemIndex, 0));
    const excludeCurrentItem = normalizedSearch.length === 1;
    if (excludeCurrentItem) wrappedItems = wrappedItems.filter((v)=>v !== currentItem
    );
    const nextItem = wrappedItems.find((item)=>item.textValue.toLowerCase().startsWith(normalizedSearch.toLowerCase())
    );
    return nextItem !== currentItem ? nextItem : undefined;
}
/**
 * Wraps an array around itself at a given start index
 * Example: `wrapArray(['a', 'b', 'c', 'd'], 2) === ['c', 'd', 'a', 'b']`
 */ function $cc7e05a45900e73f$var$wrapArray(array, startIndex) {
    return array.map((_, index)=>array[(startIndex + index) % array.length]
    );
}
const $cc7e05a45900e73f$export$be92b6f5f03c0fe9 = $cc7e05a45900e73f$export$ef9b1a59e592288f;
const $cc7e05a45900e73f$export$41fb9f06171c75f4 = $cc7e05a45900e73f$export$3ac1e88a1c0b9f1;
const $cc7e05a45900e73f$export$4c8d1a57a761ef94 = $cc7e05a45900e73f$export$e288731fd71264f0;
const $cc7e05a45900e73f$export$f04a61298a47a40f = $cc7e05a45900e73f$export$99b400cabb58c515;
const $cc7e05a45900e73f$export$602eac185826482c = $cc7e05a45900e73f$export$b2af6c9944296213;
const $cc7e05a45900e73f$export$7c6e2c02157bb7d2 = $cc7e05a45900e73f$export$c973a4b3cb86a03d;
const $cc7e05a45900e73f$export$d5c6c08dc2d3ca7 = $cc7e05a45900e73f$export$9ed6e7b40248d36d;
const $cc7e05a45900e73f$export$eb2fcfdbd7ba97d4 = $cc7e05a45900e73f$export$ee25a334c55de1f4;
const $cc7e05a45900e73f$export$b04be29aa201d4f5 = $cc7e05a45900e73f$export$f67338d29bd972f8;
const $cc7e05a45900e73f$export$6d08773d2e66f8f2 = $cc7e05a45900e73f$export$13ef48a934230896;
const $cc7e05a45900e73f$export$d6e5bf9c43ea9319 = $cc7e05a45900e73f$export$3572fb0fb821ff49;
const $cc7e05a45900e73f$export$c3468e2714d175fa = $cc7e05a45900e73f$export$6b9198de19accfe6;
const $cc7e05a45900e73f$export$2f60d3ec9ad468f2 = (/* unused pure expression or super */ null && ($cc7e05a45900e73f$export$d8117927658af6d7));
const $cc7e05a45900e73f$export$bf1aedc3039c8d63 = (/* unused pure expression or super */ null && ($cc7e05a45900e73f$export$ff951e476c12189));
const $cc7e05a45900e73f$export$1ff3c3f08ae963c0 = $cc7e05a45900e73f$export$eba4b1df07cb1d3;
const $cc7e05a45900e73f$export$21b07c8f274aebd5 = (/* unused pure expression or super */ null && ($cc7e05a45900e73f$export$314f4cb8f8099628));





//# sourceMappingURL=index.mjs.map


/***/ })

};
;