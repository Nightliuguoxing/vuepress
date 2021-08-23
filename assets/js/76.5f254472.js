(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{374:function(v,_,a){"use strict";a.r(_);var t=a(0),i=Object(t.a)({},(function(){var v=this,_=v.$createElement,a=v._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("h2",{attrs:{id:"实验名称-运算器实验"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实验名称-运算器实验"}},[v._v("#")]),v._v(" 实验名称：运算器实验")]),v._v(" "),a("ul",[a("li",[v._v("实验学时：2学时")])]),v._v(" "),a("hr"),v._v(" "),a("h2",{attrs:{id:"预习报告-2021-05-06"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#预习报告-2021-05-06"}},[v._v("#")]),v._v(" 预习报告 2021-05-06")]),v._v(" "),a("h4",{attrs:{id:"实验原理摘要"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实验原理摘要"}},[v._v("#")]),v._v(" 实验原理摘要")]),v._v(" "),a("p",[v._v("ALU运算器由CPLD描述。运算器的输出FUN经过74LS245三态门与数据总线相连，运算源寄存器A和暂存器B的数据输入端分别由2个74LS574锁存器锁存，锁存器的输入端与数据总线相连，准双向I/O输入输出端口用来给出参与运算的数据，经2片74LS245三态门与数据总线相连。")]),v._v(" "),a("h4",{attrs:{id:"实验仪器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实验仪器"}},[v._v("#")]),v._v(" 实验仪器")]),v._v(" "),a("ul",[a("li",[v._v("PC机")]),v._v(" "),a("li",[v._v("CMStudio")]),v._v(" "),a("li",[v._v("Dais-CMX08+ 实验箱")])]),v._v(" "),a("h4",{attrs:{id:"实验内容及步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实验内容及步骤"}},[v._v("#")]),v._v(" 实验内容及步骤")]),v._v(" "),a("ul",[a("li",[v._v("实验内容\n"),a("ol",[a("li",[v._v("从I/O口预置数据并传送至AX寄存器")]),v._v(" "),a("li",[v._v("从I/O口预置数据并传送至寄存器BX")]),v._v(" "),a("li",[v._v("AX、BX寄存器中的数据传送至ALU做某种运算，并把结果传送到数据总线")])])]),v._v(" "),a("li",[v._v("实验步骤\n"),a("ol",[a("li",[v._v("PC机链接Dais-CMX实验箱，并通电")]),v._v(" "),a("li",[v._v("在PC上打开CMStudio软件并诊断")]),v._v(" "),a("li",[v._v("通过I/O单元向累加器A和暂存器B置数")]),v._v(" "),a("li",[v._v("验证表各种ALU运算器的运算功能")])])])]),v._v(" "),a("hr"),v._v(" "),a("h2",{attrs:{id:"实验报告-2021-05-07"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实验报告-2021-05-07"}},[v._v("#")]),v._v(" 实验报告 2021-05-07")]),v._v(" "),a("h4",{attrs:{id:"实验目的及要求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实验目的及要求"}},[v._v("#")]),v._v(" 实验目的及要求")]),v._v(" "),a("ol",[a("li",[v._v("理解运算器部件的工作原理")]),v._v(" "),a("li",[v._v("掌握运算器的数据传输方式")]),v._v(" "),a("li",[v._v("验证运算功能发生器及进位控制组合功能")])]),v._v(" "),a("ul",[a("li",[v._v("完成带进位和不带进位的算术、逻辑运算实验")]),v._v(" "),a("li",[v._v("熟悉ALU运算控制位的运用")])]),v._v(" "),a("h4",{attrs:{id:"实验环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实验环境"}},[v._v("#")]),v._v(" 实验环境")]),v._v(" "),a("ul",[a("li",[v._v("PC机")]),v._v(" "),a("li",[v._v("CMStudio")]),v._v(" "),a("li",[v._v("Dais-CMX08+ 实验箱")])]),v._v(" "),a("h4",{attrs:{id:"实验内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实验内容"}},[v._v("#")]),v._v(" 实验内容")]),v._v(" "),a("ol",[a("li",[v._v("从I/O口预置数据并传送至AX寄存器")]),v._v(" "),a("li",[v._v("从I/O口预置数据并传送至寄存器BX")]),v._v(" "),a("li",[v._v("AX、BX寄存器中的数据传送至ALU做某种运算，并把结果传送到数据总线")])]),v._v(" "),a("h4",{attrs:{id:"实验步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实验步骤"}},[v._v("#")]),v._v(" 实验步骤")]),v._v(" "),a("ol",[a("li",[v._v("PC机链接Dais-CMX08+ 实验箱，并通电")]),v._v(" "),a("li",[v._v("在PC上打开CMStudio软件并诊断")]),v._v(" "),a("li",[v._v("使K0~k23全部置0,即复位")]),v._v(" "),a("li",[v._v("从I/O口预置数据5566H,并传送至AX寄存器\n"),a("ul",[a("li",[v._v("在I/O中预置5566H, 打开AX寄存器写允许, I/O准双向口读允许:o2 o1 o0 x2 x1 x0(k19 k18 k17 k10 k9 k8)置011 011")]),v._v(" "),a("li",[v._v("使用数据总线的字传递，使w xp op(k6 k7 k16)置111")]),v._v(" "),a("li",[v._v("单击单脉冲，可以看到数据5566H成功放入AX寄存器中")])])]),v._v(" "),a("li",[v._v("从I/O口预置数据AA77, 并传送至寄存器BX\n"),a("ul",[a("li",[v._v("在I/O中预置5566H, 打开BX寄存器写允许, I/O准双向口读允许:o2 o1 o0 x2 x1 x0(k19 k18 k17 k10 k9 k8)置010 011")]),v._v(" "),a("li",[v._v("使用数据总线使用字传递，w xp op(k6 k7 k16)置111")]),v._v(" "),a("li",[v._v("单击单脉冲，可以看到数据AA77H成功放入BX寄存器中")])])]),v._v(" "),a("li",[v._v("AX, BX进行算数运算加的运算\n"),a("ul",[a("li",[v._v("使K0~k23全部置0")]),v._v(" "),a("li",[v._v("ALU读AX数据, 数据总线使用字传递，w xp op M S2 S1 S0(k6 k7 k16 k15 k13 k12 k11)置111 0000")]),v._v(" "),a("li",[v._v("单击单脉冲，可以看到ALU成功读取AX寄存器数据")]),v._v(" "),a("li",[v._v("ALU读BX数据, 数据总线使用字传递，w xp op M S2 S1 S0(k6 k7 k16 k15 k13 k12 k11)置111 0111")]),v._v(" "),a("li",[v._v("单击单脉冲，可以看到ALU成功读取BX寄存器数据")]),v._v(" "),a("li",[v._v("使运算器进行算数加法运算: M S2 S1 S0 x2 x1 x0(k15 k13 k12 k11 k10 k9 k8)置1011 001")]),v._v(" "),a("li",[v._v("单击单脉冲，可以看到ALU将运算后的数放入FUN和Data BUS中")])])])]),v._v(" "),a("h4",{attrs:{id:"实验结果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实验结果"}},[v._v("#")]),v._v(" 实验结果")]),v._v(" "),a("ul",[a("li",[v._v("可以看到数据5566H成功放入AX寄存器中")]),v._v(" "),a("li",[v._v("可以看到数据AA77H成功放入BX寄存器中")]),v._v(" "),a("li",[v._v("可以看到ALU将运算后的结果10CC放入FUN和Data BUS中")])]),v._v(" "),a("h4",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[v._v("#")]),v._v(" 总结")]),v._v(" "),a("ul",[a("li",[v._v("通过本次实验，掌握了从I/O预置数据并传送到寄存器中，以及ALU各种运算，观察到了进位和不进位的各种实验结果。")]),v._v(" "),a("li",[v._v("失误也是少不了的，由于k0~k23共24个开关，有时也是会有弄错的时候，结果当然也是各种各样的，下一次一定认真仔细。")])])])}),[],!1,null,null,null);_.default=i.exports}}]);