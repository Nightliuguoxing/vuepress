(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{356:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"栈和队列"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#栈和队列"}},[t._v("#")]),t._v(" 栈和队列")]),t._v(" "),s("h3",{attrs:{id:"栈"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#栈"}},[t._v("#")]),t._v(" 栈")]),t._v(" "),s("ul",[s("li",[t._v("栈: 限定仅在表尾进行插入和删除操作的线性表")]),t._v(" "),s("li",[t._v("栈顶/栈底: 允许进行插入、删除操作的表尾端称为栈顶，表头端称为栈底")]),t._v(" "),s("li",[t._v("进栈/入栈: 栈的插入操作通常称为进栈或入栈")]),t._v(" "),s("li",[t._v("出栈/退栈: 栈的删除操作通常称为退栈或出栈")]),t._v(" "),s("li",[t._v("空栈: 不含元素的空表称为空栈")])]),t._v(" "),s("h3",{attrs:{id:"栈的特点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#栈的特点"}},[t._v("#")]),t._v(" 栈的特点")]),t._v(" "),s("ul",[s("li",[t._v("FILO: First In Last Out (先进后出)")])]),t._v(" "),s("h3",{attrs:{id:"队列"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#队列"}},[t._v("#")]),t._v(" 队列")]),t._v(" "),s("ul",[s("li",[t._v("队列: 只能在表的一端进行插入,而在另一端删除元素的线性表")]),t._v(" "),s("li",[t._v("队尾队头: 允许插入的一端称为队尾允许删除的一端称为队头")]),t._v(" "),s("li",[t._v("入队列: 队列的插入操作通常称为入队列")]),t._v(" "),s("li",[t._v("出队列: 队列的删除操作通常称为出队列")]),t._v(" "),s("li",[t._v("空队列: 当队列中没有数据元素时，称为空队列")])]),t._v(" "),s("h3",{attrs:{id:"队列的特点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#队列的特点"}},[t._v("#")]),t._v(" 队列的特点")]),t._v(" "),s("ul",[s("li",[t._v("FIFO: First In First Out (先进先出)")])]),t._v(" "),s("h3",{attrs:{id:"栈与队列"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#栈与队列"}},[t._v("#")]),t._v(" 栈与队列")]),t._v(" "),s("p",[t._v("栈、队列是一种特殊（操作受限）的线性表区别: 仅在于运算规则不同")]),t._v(" "),s("hr"),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}}),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("线性表")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("栈")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("队列")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("逻辑结构")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("一对一")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("一对一")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("一对一")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("存储结构")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("顺序表、链表")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("顺序栈、链栈")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("顺序队列、链队列")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("运算规则")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("随机、顺序存取")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("后进先出")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("先进先出")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("插入操作")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Insert(L,i, x)1≤i≤n+1")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Insert(S,n+1, x)")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Insert(Q,n+1, x)")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("删除操作")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Delete(L,i)1≤i≤n")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Delete(S,n)")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Delete(Q,1)")])])])]),t._v(" "),s("h3",{attrs:{id:"栈的顺序存储"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#栈的顺序存储"}},[t._v("#")]),t._v(" 栈的顺序存储")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    SElemType "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("base"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 栈底指针")]),t._v("\n    SElemType "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("top"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 栈顶指针")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" stacksize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当前已分配的存储空间")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("SqStack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h4",{attrs:{id:"入栈"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#入栈"}},[t._v("#")]),t._v(" 入栈")]),t._v(" "),s("ol",[s("li",[t._v("若栈满则追加存储空间；")]),t._v(" "),s("li",[t._v("若栈不满，则在栈顶指针指示的位置插入元素e，最后将栈顶指针增1。")])]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[t._v("Status "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SqStack "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("S"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" SElemType e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 判满")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("S"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" S"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("base "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" S"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stacksize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ERROR"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("S"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => *S.top = e; S.top++;")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" OK"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"出栈"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#出栈"}},[t._v("#")]),t._v(" 出栈")]),t._v(" "),s("p",[t._v("1)若栈为空，返回错误；"),s("br"),t._v("\n2)若栈不空，先将栈顶指针减1，然后删除栈顶指针指示的元素。")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[t._v("Status "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Pop")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SqStack "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("S"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" SElemType e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 判空")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("S"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" S"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("base"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ERROR"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    e "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("S"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" OK"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"顺序栈的总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#顺序栈的总结"}},[t._v("#")]),t._v(" 顺序栈的总结")]),t._v(" "),s("ul",[s("li",[t._v("栈是操作受限的线性结构，可以用线性表实现栈的操作，用顺序表实现顺序栈的操作时应将顺序表的表尾作为栈顶。")]),t._v(" "),s("li",[t._v("所有操作(除了遍历)的时间复杂度都是：O(1)。")])]),t._v(" "),s("h3",{attrs:{id:"栈的链式存储"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#栈的链式存储"}},[t._v("#")]),t._v(" 栈的链式存储")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[t._v("\n")])])]),s("h4",{attrs:{id:"取栈顶"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#取栈顶"}},[t._v("#")]),t._v(" 取栈顶")]),t._v(" "),s("ol",[s("li",[t._v("首先判断栈是否为空，若栈为空，则返回ERROR；")]),t._v(" "),s("li",[t._v("若栈不空则取S指向的栈顶元素，返回OK。")])]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[t._v("Status "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetTop")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("LinkStack S"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ElemType "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("S "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ERROR"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    e "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" S"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" OK"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"入栈-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#入栈-2"}},[t._v("#")]),t._v(" 入栈")]),t._v(" "),s("ol",[s("li",[t._v("首先申请结点空间，建立新结点；")]),t._v(" "),s("li",[t._v("然后将新结点插入到链栈中作为新的栈顶元素；")]),t._v(" "),s("li",[t._v("最后移动栈顶指针到新的栈顶。")])]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[t._v("Status "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("LinkStack "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("S"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ElemType e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 建立结点")]),t._v("\n    p "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("LinkStack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("malloc")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("sizeof")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("LNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("exit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("OVERFLOW"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    p"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 插入栈顶")]),t._v("\n    p"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("next "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" S"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    S "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" OK"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"出栈-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#出栈-2"}},[t._v("#")]),t._v(" 出栈")]),t._v(" "),s("ol",[s("li",[t._v("若栈为空，返回错误；")]),t._v(" "),s("li",[t._v("若栈不空，用e取出栈顶元素的值，保存栈顶元素的位置;")]),t._v(" "),s("li",[t._v("移动栈顶指针S到新的栈顶元素;")]),t._v(" "),s("li",[t._v("释放结点的内存空间，并返回OK。")])]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[t._v("Status "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Pop")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("LinkList "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("S"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ElemType "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("S"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ERROR"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    e "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" S"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    p "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" S"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    S "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" S"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("next"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("free")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" OK"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"链栈的总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#链栈的总结"}},[t._v("#")]),t._v(" 链栈的总结")]),t._v(" "),s("ul",[s("li",[t._v("栈是操作受限的线性结构，可以用线性表实现栈的操作，用链表实现链栈的操作时应将链表的表头作为栈顶。")]),t._v(" "),s("li",[t._v("所有操作(除了遍历)的时间复杂度都是：O(1)。")])]),t._v(" "),s("h3",{attrs:{id:"队列的链式存储"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#队列的链式存储"}},[t._v("#")]),t._v(" 队列的链式存储")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 结点类型")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("QNode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    QElemType data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("QNode")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("next"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("QNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("QueuePtr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 链队列类型")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    QueuePtr front"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 队头指针")]),t._v("\n    QueuePtr rear"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 队尾指针")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("LinkQueue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h4",{attrs:{id:"入队列"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#入队列"}},[t._v("#")]),t._v(" 入队列")]),t._v(" "),s("ol",[s("li",[t._v("申请新元素的结点空间，若申请不成功则退出，若申请成功，则结点的数据域为e,指针域为空；")]),t._v(" "),s("li",[t._v("将新生成的结点链接到队尾之后，作为新的队尾")]),t._v(" "),s("li",[t._v("队尾指针移向新的队尾结点，返回OK。")])]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[t._v("Status "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("EnQueue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("LinkQueue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("Q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" QElemType e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 申请内存，生成新的结点")]),t._v("\n    p "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("QueuePtr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("malloc")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("sizeof")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("QNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("exit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("OVERFLOW"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    p"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    p"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("next "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    Q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rear"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("next "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    Q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rear "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" OK"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"出队列"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#出队列"}},[t._v("#")]),t._v(" 出队列")]),t._v(" "),s("ol",[s("li",[t._v("若队列为空，则返回错误；")]),t._v(" "),s("li",[t._v("若队列不空，则删除队头元素，若此时队头恰是队尾，让队尾指针重新指向头结点")])]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[t._v("Status "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("DeQueue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("LinkQueue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("Q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" QElemType "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("front "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" Q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rear"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ERROR"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    p "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("front"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("next"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    e "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" p"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    Q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("front"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("next "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" p"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("next"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rear"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rear "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("front"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("free")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" OK"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"链队列的总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#链队列的总结"}},[t._v("#")]),t._v(" 链队列的总结")]),t._v(" "),s("ul",[s("li",[t._v("链队列的操作即为单链表的插入和删除操作的特殊情况，只是尚需修改尾指针或头指针。")]),t._v(" "),s("li",[t._v("所有操作(除了遍历)的时间复杂度都是：O(1)。")])]),t._v(" "),s("h3",{attrs:{id:"循环队列"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#循环队列"}},[t._v("#")]),t._v(" 循环队列")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    QElemType "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("base"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" front"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 头指针")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" rear"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 尾指针")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("code",[t._v("入队 : Q.rear = (Q.rear + 1) % MAXQSIZE;")]),s("br"),t._v(" "),s("code",[t._v("出队 : Q.front = (Q.front + 1) % MAXQSIZE;")]),s("br"),t._v(" "),s("code",[t._v("队满 : (Q.rear + 1) % MAXQSIZE == Q.front;")]),s("br"),t._v(" "),s("code",[t._v("队空 :")])]),t._v(" "),s("h4",{attrs:{id:"入队列-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#入队列-2"}},[t._v("#")]),t._v(" 入队列")]),t._v(" "),s("ol",[s("li",[t._v("若队列满则返回错误")]),t._v(" "),s("li",[t._v("若队列不满,插入元素e到队尾指向的单元")]),t._v(" "),s("li",[t._v("队尾指针增1")])]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[t._v("Status "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("EnQueue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SqQueue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("S"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" QElemType e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rear "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" MAXQSIZE "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" Q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("front"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ERROR"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    Q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("base"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rear"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    Q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rear "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rear "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" MAXQSIZE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" OK"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"出队列-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#出队列-2"}},[t._v("#")]),t._v(" 出队列")]),t._v(" "),s("ol",[s("li",[t._v("若队列为空，返回错误")]),t._v(" "),s("li",[t._v("若队列不空，删除队头元素，用e返回其值")]),t._v(" "),s("li",[t._v("队头指针增1，返回OK")])]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[t._v("Status "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("DeQueue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SqQueue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("Q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" QElemType "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("front "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" Q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rear"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ERROR"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    e "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rear"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("front"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    Q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("front "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("front "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" MAXQSIZE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" OK"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"求长度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#求长度"}},[t._v("#")]),t._v(" 求长度")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[t._v("Status "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("QueueLength")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SqQueue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("S"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rear "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" Q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("front "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" MAXQSIZE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" MAXQSIZE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"循环队列总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#循环队列总结"}},[t._v("#")]),t._v(" 循环队列总结")]),t._v(" "),s("ul",[s("li",[t._v("队列是操作受限的线性结构，其操作在队列的两端进行，特别需要注意队空和队满的条件。")]),t._v(" "),s("li",[t._v("所有操作(除了遍历)的时间复杂度都是：O(1)。")])])])}),[],!1,null,null,null);a.default=e.exports}}]);