(this.webpackJsonpassignment8=this.webpackJsonpassignment8||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n(1),l=n.n(o),s=n(8),a=n.n(s),i=(n(15),n(9)),r=n(2),u=n(3),d=n(5),j=n(4),b=(n(7),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).handleClick=function(){c.setState({colorSelected:c.props.colorSelected})},c.state={colorSelected:""},c}return Object(u.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{className:"cell",style:{backgroundColor:this.state.colorSelected},onClick:this.handleClick})}}]),n}(o.Component));function h(e){return Object(c.jsx)("div",{className:"row",children:Array(e.numCols).fill(Object(c.jsx)(b,{colorSelected:e.colorSelected}))})}function C(e){return Object(c.jsx)("table",{class:"center",children:Array(e.numRows).fill(Object(c.jsx)(h,{numCols:e.numCols,colorSelected:e.colorSelected}))})}var m=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).addRow=function(){c.setState({numRows:c.state.numRows+1})},c.addCol=function(){c.setState({numCols:c.state.numCols+1})},c.delCol=function(){c.state.numCols>0&&c.setState({numCols:c.state.numCols-1})},c.delRow=function(){c.state.numRows>0&&c.setState({numRows:c.state.numRows-1})},c.handleChange=function(e){c.setState(Object(i.a)({},e.target.name,[e.target.value]))},c.state={numCols:5,numRows:5,colorSelected:""},c}return Object(u.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("div",{className:"bar",children:Object(c.jsxs)("ul",{children:[Object(c.jsx)("button",{class:"btn",onClick:this.addCol,children:" Add Row "}),Object(c.jsx)("button",{class:"btn",onClick:this.addRow,children:" Add Column "}),Object(c.jsx)("button",{class:"btn",onClick:this.delCol,children:" Remove Row "}),Object(c.jsx)("button",{class:"btn",onClick:this.delRow,children:" Remove Column "}),Object(c.jsxs)("select",{class:"drop-down",name:"colorSelected",onChange:this.handleChange,children:[Object(c.jsx)("option",{value:"",children:"Select Color"}),Object(c.jsx)("option",{value:"#78DCE8",children:"Blue"}),Object(c.jsx)("option",{value:"#FFD866",children:"Yellow"}),Object(c.jsx)("option",{value:"#A9DC76",children:"Green"}),Object(c.jsx)("option",{value:"#FF6188",children:"Pink"}),Object(c.jsx)("option",{value:"#FC9867",children:"Orange"}),Object(c.jsx)("option",{value:"#AB9DF2",children:"Purple"})]})]})}),Object(c.jsx)(C,{numRows:this.state.numRows,numCols:this.state.numCols,colorSelected:this.state.colorSelected})]})}}]),n}(o.Component),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,l=t.getLCP,s=t.getTTFB;n(e),c(e),o(e),l(e),s(e)}))};a.a.render(Object(c.jsx)(l.a.StrictMode,{children:Object(c.jsx)(m,{})}),document.getElementById("root")),O()},7:function(e,t,n){}},[[16,1,2]]]);
//# sourceMappingURL=main.7f123069.chunk.js.map