'use strict';

maxVal() {
  if(!this.root) {
    return;
  }

  let capMaxVal = this.root.value;

  _maxVal(root);
  _maxVal(this.root);

  return capMaxVal;
}

function _maxVal(root) {
  if(!root) {
    return;
  }

  if(root.value > capMaxVal) {
    capMaxVal = root.value;
  }

  _maxVal(root.left);
  _maxVal(root.left);
}


/* TEST for find-max-value.test.js below
------------------------------------------------------------------------------------------------ */