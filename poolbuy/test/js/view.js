/**
 * JSX version of https://github.com/jpmonette/todomvc-mithril/blob/1d627f1d5dc0890d0a99cdcb16d09387f68f6df0/js/views/todo-view.js
 * Assumes the use of the vanilla JSX Transformer and an "mshim" object to translate tag calls to the format m() expects.
 * @jsx mshim
 */

'use strict';

var m = require('mithril')

function view(ctrl) {
  var clearCompleted
  if (ctrl.amountCompleted() != 0) {
    clearCompleted = mshim("button", {id:"clear-completed", onclick:ctrl.clearCompleted.bind(ctrl)}, [
      "Clear completed (",ctrl.amountCompleted(),")"
    ])
  }

  var todos = ctrl.list.map(function(task, index) {
    return mshim("li", {className:task.completed() && 'completed'}, [
      mshim("div", {className:"view"}, [
        mshim("input",
          {className:"toggle",
          type:"checkbox",
          onclick:m.withAttr('checked', task.completed),
          checked:task.completed()}
        ),
        mshim("label", [task.title()]),
        mshim("button", {className:"destroy", onclick:ctrl.remove.bind(ctrl, index)})
      ]),
      mshim("input", {className:"edit"})
    ])
  })

  return mshim("div", {id:"todoapp"}, [
    mshim("header", {id:"header"}, [
      mshim("h1", ["todos"]),
      mshim("input",
        {id:"new-todo",
        placeholder:"What needs to be done?",
        onkeydown:function(e) { m.withAttr('value', ctrl.title)(e); ctrl.add(ctrl.title, e) },
        value:ctrl.title()}
      )
    ]),
    mshim("section", {id:"main"}, [
      mshim("input", {id:"toggle-all", type:"checkbox"}),
      mshim("ul", {id:"todo-list"}, [
        todos
      ])
    ]),
    mshim("footer", {id:"footer"}, [
      mshim("span", {id:"todo-count"}, [
        mshim("strong", [ctrl.list.length, " item",ctrl.list.length > 1 ? 's' : '', " left"])
      ]),
      mshim("ul", {id:"filters"}, [
        mshim("li", {className:"selected"}, [
          mshim("a", {href:"#/"}, ["All"])
        ]),
        mshim("li", [
          mshim("a", {href:"#/active"}, ["Active"])
        ]),
        mshim("li", [
          mshim("a", {href:"#/completed"}, ["Completed"])
        ])
      ]),
      clearCompleted
    ])
  ])
}

module.exports = view