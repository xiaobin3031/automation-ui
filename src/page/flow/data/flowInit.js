let globalId = 1;
const initFlow = (flow) => {
  if(!!flow._init){
    return;
  }
  if(!!flow.perform){
    switch(flow.perform){
      case 'while': initWhile(flow); break;
      case 'buildIn': initBuildIn(flow); break;
      case 'cache': initCache(flow); break;
      case 'check': initCheck(flow); break;
      case 'click': initClick(flow); break;
      case 'input': initInput(flow); break;
      case 'pressKey': initPressKey(flow); break;
      case 'recycleView': initRecycleView(flow); break;
      case 'sleep': initSleep(flow); break;
      case 'swipe': initSwipe(flow); break;
      case 'wait': initWait(flow); break;
      default: break;
    }
    flow.name = '';
    flow.element = initElement();
    flow.description = '';
    flow._init = true;
  }
}
const initBroke = () => {
  return {
    _id: `broke-${globalId++}`,
    element: initElement(),
    activity: '',
    activities: []
  } 
}
const initElement = () => {
  return {
    _id: `element-${globalId++}`,
    id: '',
    text: '',
    notInRoot: false,
    optional: false,
    multi: false,
    anyElements: [ ]
  }
}
const initBuildIn = (flow) => {
  flow._id = `build-in-${globalId++}`;
  flow.methodName = '';
  flow.argName = '';
  flow.argValue = '';
  flow.argType = '';
  return flow;
}
const initCache = (flow) => {
  flow._id = `cache-${globalId++}`;
  flow.index = 0;
  flow.viewId = '';
  flow.cacheKey = '';
  flow.uiBillField = [];
  return flow;
}
const initCheck = (flow) => {
  flow._id = `check-${globalId++}`;
  flow.activity = '';
  flow.match = {
    _id: `check-match-${globalId++}`,
    name: '',
    flows: []
  };
  flow.mismatch = {
    _id: `check-mismatch-${globalId++}`,
    name: '',
    flows: []
  };
  flow.optional = false;
  return flow;
}
const initClick = (flow) => {
  flow._id = `click-${globalId++}`;
  return flow;
}
const initInput = (flow) => {
  flow._id = `input-${globalId++}`;
  flow.text = '';
  flow.randomMax = '';
  flow.randomMin = '';
  flow.scale = 0;
  flow.cacheKey = '';
  return flow;
}
const initPressKey = (flow) => {
  flow._id = `press-key-${globalId++}`;
  flow.keyType = '';
  flow.key = 0;
  return flow;
}
const initRecycleView = (flow) => {
  flow._id = `recycle-view-${globalId++}`;
  flow.numberPerPage = 0;
  flow.rangeBegin = -1;
  flow.rangeEnd = -1;
  flow.random = false;
  flow.randomCount = 0;
  flow.indexes = [];
  flow.childViewId = '';
  flow.flows = [];
  return flow;
}
const initSleep = (flow) => {
  flow._id = `sleep-${globalId++}`;
  flow.sleep = 0;
  return flow;
}
const initSwipe = (flow) => {
  flow._id = `swipe-${globalId++}`;
  flow.direction = '';
  return flow;
}
const initWait = (flow) => {
  flow._id = `wait-${globalId++}`;
  flow.broke = initBroke();
  flow.time = 1;
  flow.maxTime = 60;
  flow.flows = [];
  return flow;
}
const initWhile = (flow) => {
  flow._id = `while-${globalId++}`;
  flow.broke = initBroke();
  flow.sleepTime = 0;
  flow.maxCount = -1;
  flow.flows = [];
  return flow;
}

export default {initFlow, initBroke, initBuildIn, initCache, initClick, 
  initElement, initInput, initPressKey, initRecycleView, 
  initSleep, initSwipe, initWait, initWhile}