(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(t,e,o){t.exports={todoList__header:"TodoListHeader_todoList__header__3clHl",header__input:"TodoListHeader_header__input__1pPD6",header__buttons:"TodoListHeader_header__buttons__2W66_"}},function(t,e,o){t.exports={todoList__footer:"TodoListFooter_todoList__footer__cPpA8",footer__button:"TodoListFooter_footer__button__vkGau","footer__button-active":"TodoListFooter_footer__button-active__TWdtr",footer__buttons:"TodoListFooter_footer__buttons__3IkST"}},,,function(t,e,o){t.exports={TodoList__tasks:"TodoListTasks_TodoList__tasks__2Fhrq"}},,function(t,e,o){t.exports=o(17)},,,,,function(t,e,o){},function(t,e,o){},function(t,e,o){"use strict";o.r(e);var a=o(0),n=o.n(a),r=o(7),i=o.n(r),s=(o(15),o(9)),c=o(1),l=o(2),_=o(3),u=(o(16),o(5)),d=o.n(u),p=function(t){Object(_.a)(o,t);var e=Object(l.a)(o);function o(){var t;Object(c.a)(this,o);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).render=function(e){var o="All"===t.props.filterValue?"footer__button-active":"",a="Completed"===t.props.filterValue?"footer__button-active":"",r="Active"===t.props.filterValue?"footer__button-active":"";return n.a.createElement("div",{className:d.a.todoList__footer},n.a.createElement("button",{className:"".concat(d.a.footer__button," ").concat(d.a[o])},"All"),n.a.createElement("button",{className:"".concat(d.a.footer__button," ").concat(d.a[a])},"Completed"),n.a.createElement("button",{className:"".concat(d.a.footer__button," ").concat(d.a[r])},"Active"))},t}return o}(n.a.Component),m=o(8),f=o.n(m),v=function(t){Object(_.a)(o,t);var e=Object(l.a)(o);function o(){var t;Object(c.a)(this,o);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).render=function(e){return n.a.createElement("div",{className:"todoList-task"},n.a.createElement("input",{type:"checkbox",checked:t.props.isDone}),n.a.createElement("span",null,t.props.title),n.a.createElement("span",null,", priority: ",t.props.priority))},t}return o}(n.a.Component),b=function(t){Object(_.a)(o,t);var e=Object(l.a)(o);function o(){var t;Object(c.a)(this,o);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).render=function(e){var o=t.props.tasks.map(function(t,e){return n.a.createElement(v,Object.assign({},t,{key:e}))});return n.a.createElement("div",{className:f.a.TodoList__tasks},o)},t}return o}(n.a.Component),h=o(4),k=o.n(h),T=(n.a.Component,function(t){Object(_.a)(o,t);var e=Object(l.a)(o);function o(t){var a;return Object(c.a)(this,o),(a=e.call(this,t)).state={tasks:[{title:"CSS",isDone:!0,priority:"low"},{title:"JS",isDone:!1,priority:"medium"},{title:"ReactJS",isDone:!1,priority:"high"},{title:"Patterns",isDone:!0,priority:"low"}],toggleActiveBtn:"All"},a.onAddTaskClick=function(){a.setState({tasks:[].concat(Object(s.a)(a.state.tasks),[{title:a.newTaskTitleRef.current.value,isDone:!1,priority:"low"}])}),a.newTaskTitleRef.current.value=""},a.render=function(t){return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"todoList"},n.a.createElement("div",{className:k.a.todoList__header},n.a.createElement("h3",{className:"todoList-header__title"},"What to Learn"),n.a.createElement("div",{className:"todoList-newTaskForm"},n.a.createElement("input",{ref:a.newTaskTitleRef,className:k.a.header__input,type:"text",placeholder:"New task name"}),n.a.createElement("button",{onClick:a.onAddTaskClick,className:k.a.header__buttons},"Add"))),n.a.createElement(b,{tasks:a.state.tasks}),n.a.createElement(p,{filterValue:a.state.toggleActiveBtn})))},a.newTaskTitleRef=n.a.createRef(),a}return o}(n.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.4fd3ed81.chunk.js.map