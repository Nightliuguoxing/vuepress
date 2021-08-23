(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{380:function(_,v,t){"use strict";t.r(v);var a=t(0),s=Object(a.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h2",{attrs:{id:"第二章-进程的描述与控制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第二章-进程的描述与控制"}},[_._v("#")]),_._v(" 第二章  进程的描述与控制")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("【目的要求】")]),_._v(" "),t("ol",[t("li",[_._v("[掌握]进程的概念及其特征、进程的状态及其转换；")]),_._v(" "),t("li",[_._v("[掌握]进程控制原语，用P、V操作解决进程同步问题；")]),_._v(" "),t("li",[_._v("[熟悉]进程间的高级通信机制；")]),_._v(" "),t("li",[_._v("[熟悉]消息缓冲队列机制；")]),_._v(" "),t("li",[_._v("[了解]管程的概念；")]),_._v(" "),t("li",[_._v("[了解]线程的概念、线程与进程的不同、线程的实现方式。")])])]),_._v(" "),t("li",[t("p",[_._v("【重点与难点】")]),_._v(" "),t("ol",[t("li",[_._v("进程的概念及其特征；")]),_._v(" "),t("li",[_._v("进程的状态及其转换；")]),_._v(" "),t("li",[_._v("信号量机制；")]),_._v(" "),t("li",[_._v("经典进程的同步问题。")])])])]),_._v(" "),t("hr"),_._v(" "),t("h2",{attrs:{id:"_2-1-前趋图和程序执行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-前趋图和程序执行"}},[_._v("#")]),_._v(" 2.1 前趋图和程序执行")]),_._v(" "),t("h4",{attrs:{id:"_2-1-1-前趋图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1-前趋图"}},[_._v("#")]),_._v(" 2.1.1 前趋图")]),_._v(" "),t("p",[_._v("前趋图(Precedence Graph)是一个有向无循环图，记为DAG(Directed Acyclic Graph)，用于描述进程之间执行的前后顺序")]),_._v(" "),t("h4",{attrs:{id:"_2-1-2-程序的顺序执行及其特征"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-2-程序的顺序执行及其特征"}},[_._v("#")]),_._v(" 2.1.2 程序的顺序执行及其特征")]),_._v(" "),t("ol",[t("li",[_._v("程序的顺序执行")]),_._v(" "),t("li",[_._v("程序顺序执行时的特征\n"),t("ul",[t("li",[_._v("顺序性：处理机严格按照程序所规定的顺序执行。")]),_._v(" "),t("li",[_._v("封闭性：程序在封闭的环境下运行，即程序运行时独占全机资源，资源的状态只有本程序才能改变它。")]),_._v(" "),t("li",[_._v("可再现性：只要程序执行时的环境和初识条件相同，当程序重复执行时，都可获得相同的结果。")])])])]),_._v(" "),t("h4",{attrs:{id:"_2-1-3-程序的并发执行及其特征"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-3-程序的并发执行及其特征"}},[_._v("#")]),_._v(" 2.1.3 程序的并发执行及其特征")]),_._v(" "),t("ol",[t("li",[_._v("程序的并发执行\n"),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Nightliuguoxing/Pic@main/image/os/1619512671099-OS2131.jpg",alt:"并发执行时的前趋图"}})]),_._v(" "),t("li",[_._v("程序并发执行时的特征\n"),t("ul",[t("li",[_._v("间断性")]),_._v(" "),t("li",[_._v("失去封闭性")]),_._v(" "),t("li",[_._v("不可再现性")])])])]),_._v(" "),t("h2",{attrs:{id:"_2-2-进程的描述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-进程的描述"}},[_._v("#")]),_._v(" 2.2 进程的描述")]),_._v(" "),t("h4",{attrs:{id:"_2-2-1-进程的定义和特征"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1-进程的定义和特征"}},[_._v("#")]),_._v(" 2.2.1 进程的定义和特征")]),_._v(" "),t("ol",[t("li",[t("p",[_._v("进程的定义")]),_._v(" "),t("ul",[t("li",[_._v("较典型的进程定义有：\n"),t("ul",[t("li",[_._v("进程是程序的一次执行。")]),_._v(" "),t("li",[_._v("进程是一个程序及其数据在处理机上顺序执行时所发生的活动。")]),_._v(" "),t("li",[_._v("进程是程序在一个数据集合上运行的过程，它是系统进行资源分配和调度的一个独立单位。")])])]),_._v(" "),t("li",[_._v('在引入了进程实体的概念后，我们可以把传统OS中的进程定义为："'),t("code",[_._v("进程是进程实体的运行过程，是系统进行资源分配和调度的一个独立单位")]),_._v('"。')])])]),_._v(" "),t("li",[t("p",[_._v("进程的特征")]),_._v(" "),t("ul",[t("li",[_._v("结构特征：进程实体由程序段、数据段和PCB三部分组成。")]),_._v(" "),t("li",[_._v("动态性：进程实体有一定的生命周期。")]),_._v(" "),t("li",[_._v("并发性：多个进程实体同在内存，在一段时间内同时运行。")]),_._v(" "),t("li",[_._v("独立性：独立运行、独立接受调度 。")]),_._v(" "),t("li",[_._v("异步性：进程按异步方式运行，即按各自独立的、不可预知的速度向前推进。")])])])]),_._v(" "),t("h4",{attrs:{id:"_2-2-2-进程的基本状态及转换"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-2-进程的基本状态及转换"}},[_._v("#")]),_._v(" 2.2.2 进程的基本状态及转换")]),_._v(" "),t("ol",[t("li",[t("p",[_._v("进程的三种基本状态")]),_._v(" "),t("ul",[t("li",[_._v("就绪(Ready)状态")]),_._v(" "),t("li",[_._v("执行(Running)状态")]),_._v(" "),t("li",[_._v("阻塞(Block)状态")])])]),_._v(" "),t("li",[t("p",[_._v("三种基本状态的转换\n"),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Nightliuguoxing/Pic@main/image/os/1619512732529-OS2222.jpg",alt:"进程的三种基本状态及其转换"}})])]),_._v(" "),t("li",[t("p",[_._v("创建状态和终止状态")]),_._v(" "),t("ul",[t("li",[_._v("创建状态：进程已经拥有了自己的PCB，但进程自身还未进入主存，即创建工作尚未完成，进程还不能被调度执行，其所处的状态。")]),_._v(" "),t("li",[_._v("终止状态：当一个进程到达了自然结束点，或是出现了无法克服的错误，或是被操作系统所终结，或是被其它有终止权的进程所终结，它将进入终止状态。一旦其它进程完成了对终止状态进程的信息提取之后，操作系统将删除该进程。")])])])]),_._v(" "),t("h4",{attrs:{id:"_2-2-3-挂起操作和进程状态的转换"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-3-挂起操作和进程状态的转换"}},[_._v("#")]),_._v(" 2.2.3 挂起操作和进程状态的转换")]),_._v(" "),t("ol",[t("li",[t("p",[_._v("挂起操作的引入")]),_._v(" "),t("ul",[t("li",[_._v("终端用户的需要")]),_._v(" "),t("li",[_._v("父进程请求")]),_._v(" "),t("li",[_._v("负荷调节的需要")]),_._v(" "),t("li",[_._v("操作系统的需要")])])]),_._v(" "),t("li",[t("p",[_._v("引入挂起原语操作后三个进程状态的转换: 引入挂起原语Suspend和激活原语Active后，进程的状态转换增加了")]),_._v(" "),t("ul",[t("li",[_._v("活动就绪 -> 静止就绪")]),_._v(" "),t("li",[_._v("活动阻塞 -> 静止阻塞")]),_._v(" "),t("li",[_._v("静止就绪 -> 活动就绪")]),_._v(" "),t("li",[_._v("静止阻塞 -> 活动阻塞")]),_._v(" "),t("li",[_._v("执行 -> 静止就绪")]),_._v(" "),t("li",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Nightliuguoxing/Pic@main/image/os/1619512771153-OS2232.jpg",alt:"具有挂起状态的进程状态图"}})])])])]),_._v(" "),t("h4",{attrs:{id:"_2-2-4-进程管理中的数据结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-4-进程管理中的数据结构"}},[_._v("#")]),_._v(" 2.2.4  进程管理中的数据结构")]),_._v(" "),t("ol",[t("li",[t("p",[_._v("操作系统中用于管理控制的数据结构：表")])]),_._v(" "),t("li",[t("p",[_._v("进程控制块PCB的作用")]),_._v(" "),t("ul",[t("li",[_._v("作为独立运行基本单位的标志")]),_._v(" "),t("li",[_._v("能实现间断性运行方式")]),_._v(" "),t("li",[_._v("提供进程管理所需要的信息")]),_._v(" "),t("li",[_._v("提供进程调度所需要的信息")]),_._v(" "),t("li",[_._v("实现与其它进程的同步与通信")])])]),_._v(" "),t("li",[t("p",[_._v("进程控制块中的信息")]),_._v(" "),t("ul",[t("li",[_._v("进程标识符: 用于惟一地标识一个进程。一个进程通常有两种标识符：\n"),t("ul",[t("li",[_._v("内部标识符。在所有的操作系统中，都为每一个进        程赋予一个惟一的数字标识符，它通常是一个进程的序号。 设置内部标识符主要是为了方便系统使用。")]),_._v(" "),t("li",[_._v("外部标识符。它由创建者提供，通常是由字母、数字组成，往往是由用户(进程)在访问该进程时使用。为了描述进程的家族关系，还应设置父进程标识及子进程标识。此外，还可设置用户标识，以指示拥有该进程的用户。")])])]),_._v(" "),t("li",[_._v("处理机状态\n"),t("ul",[t("li",[_._v("通用寄存器")]),_._v(" "),t("li",[_._v("指令计数器")]),_._v(" "),t("li",[_._v("程序状态字PSW")]),_._v(" "),t("li",[_._v("用户栈指针")])])]),_._v(" "),t("li",[_._v("进程调度信息\n"),t("ul",[t("li",[t("code",[_._v("进程状态")])]),_._v(" "),t("li",[t("code",[_._v("进程优先级")])]),_._v(" "),t("li",[t("code",[_._v("进程调度所需的其它信息")])]),_._v(" "),t("li",[t("code",[_._v("事件")])])])]),_._v(" "),t("li",[_._v("进程控制信息\n"),t("ul",[t("li",[_._v("程序和数据的地址")]),_._v(" "),t("li",[_._v("进程同步和通信机制")]),_._v(" "),t("li",[_._v("资源清单")]),_._v(" "),t("li",[_._v("链接指针")])])])])]),_._v(" "),t("li",[t("p",[_._v("进程控制块的组织方式")]),_._v(" "),t("ul",[t("li",[_._v("线性方式")]),_._v(" "),t("li",[_._v("链接方式")]),_._v(" "),t("li",[_._v("索引方式")])])])]),_._v(" "),t("h2",{attrs:{id:"_2-3-进程控制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-进程控制"}},[_._v("#")]),_._v(" 2.3 进程控制")]),_._v(" "),t("hr"),_._v(" "),t("p",[_._v("进程控制是进程管理中最基本的功能。它用于创建一个新进程，终止一个已完成的进程，或终止一个因出现某事件而使其无法运行下去的进程，还可负责进程运行中的状态转换。")]),_._v(" "),t("hr"),_._v(" "),t("h4",{attrs:{id:"_2-3-1-操作系统内核"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-1-操作系统内核"}},[_._v("#")]),_._v(" 2.3.1 操作系统内核")]),_._v(" "),t("p",[_._v("现代操作系统一般将OS划分为若干层次，再将OS的不同功能分别设置在不同的层次中。为了防止OS本身及关键数据（如PCB等）遭受到应用程序有意或无意的破坏，通常将处理机的执行状态分成系统态和用户态两种：")]),_._v(" "),t("ul",[t("li",[_._v("系统态：又称为管态或内核态。它具有较高的特权，能执行一切指令（特权指令和非特权指令），访问所有寄存器和存储区，传统的OS都在系统态运行。")]),_._v(" "),t("li",[_._v("用户态：又称为目态。它是具有较低特权的执行状态，仅能执行规定的指令（非特权指令），访问指定的寄存器和存储区。一般情况下，应用程序只能在用户态运行。")])]),_._v(" "),t("p",[_._v("大多数OS内核都包含了两大方面的功能：")]),_._v(" "),t("ol",[t("li",[_._v("支撑功能\n"),t("ul",[t("li",[_._v("中断处理")]),_._v(" "),t("li",[_._v("时钟管理")]),_._v(" "),t("li",[_._v("原语操作")])])]),_._v(" "),t("li",[_._v("资源管理功能\n"),t("ul",[t("li",[_._v("进程管理")]),_._v(" "),t("li",[_._v("存储器管理")]),_._v(" "),t("li",[_._v("设备管理")])])])]),_._v(" "),t("hr"),_._v(" "),t("ul",[t("li",[_._v("原语是由若干条指令组成的，用于完成一定功能的一个过程。")]),_._v(" "),t("li",[_._v("它与一般过程的区别在于：它们是“原子操作（Atomic Operation）”所谓原子操作，是指一个操作中的所有动作要么全做，要么全不做。换言之，它是一个不可分割的基本单位，因此，在执行过程中不允许被中断。原子操作在管态下执行，常驻内存。")]),_._v(" "),t("li",[_._v("原语的作用是为了实现进程的通信和控制。")])]),_._v(" "),t("hr"),_._v(" "),t("h4",{attrs:{id:"_2-3-2-进程的创建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-2-进程的创建"}},[_._v("#")]),_._v(" 2.3.2 进程的创建")]),_._v(" "),t("ol",[t("li",[_._v("进程的层次结构")]),_._v(" "),t("li",[_._v("进程图(Process Graph): 用于描述进程家族关系的有向树。")]),_._v(" "),t("li",[_._v("引起创建进程的事件\n"),t("ul",[t("li",[_._v("用户登录")]),_._v(" "),t("li",[_._v("作业调度")]),_._v(" "),t("li",[_._v("提供服务")]),_._v(" "),t("li",[_._v("应用请求")])])]),_._v(" "),t("li",[_._v("进程的创建(Creation of Progress): OS调用Creat( )原语创建\n"),t("ul",[t("li",[_._v("申请空白PCB（新进程申请到唯一的数字标识符）。")]),_._v(" "),t("li",[_._v("为新进程分配资源（如内存）。")]),_._v(" "),t("li",[_._v("初始化进程控制块。")]),_._v(" "),t("li",[_._v("将新进程插入就绪队列。如果进程就绪队列能够接纳新进程，便将新进程插入就绪队列。")])])])]),_._v(" "),t("h4",{attrs:{id:"_2-3-3-进程的终止"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-3-进程的终止"}},[_._v("#")]),_._v(" 2.3.3 进程的终止")]),_._v(" "),t("ol",[t("li",[t("p",[_._v("引起进程终止(Termination of Process)的事件")]),_._v(" "),t("ul",[t("li",[_._v("正常结束")]),_._v(" "),t("li",[_._v("异常结束\n"),t("ul",[t("li",[_._v("越界错误")]),_._v(" "),t("li",[_._v("保护错")]),_._v(" "),t("li",[_._v("非法指令")]),_._v(" "),t("li",[_._v("特权指令错")]),_._v(" "),t("li",[_._v("运行超时")]),_._v(" "),t("li",[_._v("等待超时")]),_._v(" "),t("li",[_._v("算术运算错")]),_._v(" "),t("li",[_._v("I/O故障")])])]),_._v(" "),t("li",[_._v("外界干预\n"),t("ul",[t("li",[_._v("操作员或操作系统干预")]),_._v(" "),t("li",[_._v("父进程请求")]),_._v(" "),t("li",[_._v("父进程终止")])])])])]),_._v(" "),t("li",[t("p",[_._v("进程的终止过程")]),_._v(" "),t("ol",[t("li",[_._v("根据被终止进程的标识符，从PCB集合中检索出该进程的PCB，从中读出该进程的状态。")]),_._v(" "),t("li",[_._v("若被终止进程正处于执行状态，应立即终止该进程的执行，并置调度标志为真，用于指示该进程被终止后应重新进行调度。")]),_._v(" "),t("li",[_._v("若该进程还有子孙进程，还应将其所有子孙进程予以终止，以防他们成为不可控的进程。")]),_._v(" "),t("li",[_._v("将被终止进程所拥有的全部资源，或者归还给其父进程，或者归还给系统。")]),_._v(" "),t("li",[_._v("将被终止进程（它的PCB）从所在队列（或链表）中移出，等待其他程序来搜集信息。")])])])]),_._v(" "),t("h4",{attrs:{id:"_2-3-4-进程的阻塞与唤醒"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-4-进程的阻塞与唤醒"}},[_._v("#")]),_._v(" 2.3.4 进程的阻塞与唤醒")]),_._v(" "),t("ol",[t("li",[_._v("引起进程阻塞和唤醒的事件\n"),t("ul",[t("li",[_._v("向系统请求共享资源失败")]),_._v(" "),t("li",[_._v("等待某种（I/O）操作的完成")]),_._v(" "),t("li",[_._v("新数据尚未到达")]),_._v(" "),t("li",[_._v("等待新任务的到达 如：发送进程")])])]),_._v(" "),t("li",[_._v("进程阻塞过程\n"),t("ol",[t("li",[_._v("中止执行，进程调用block( )原语把自己阻塞：")]),_._v(" "),t("li",[_._v("修改状态：由“执行”改为阻塞；")]),_._v(" "),t("li",[_._v("将PCB插入阻塞队列；")]),_._v(" "),t("li",[_._v("最后，转调度程序进行重新调度，将处理机分配给另一就绪进程，并进行切换。")])])]),_._v(" "),t("li",[_._v("进程唤醒过程")])]),_._v(" "),t("h4",{attrs:{id:"_2-3-5-进程的挂起与激活"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-5-进程的挂起与激活"}},[_._v("#")]),_._v(" 2.3.5 进程的挂起与激活")]),_._v(" "),t("ol",[t("li",[_._v("进程的挂起\n"),t("ul",[t("li",[_._v("当出现了引起进程挂起的事件时，比如，用户进程请求将自己挂起，或父进程请求将自己的某个子进程挂起，系统将利用挂起原语suspend( )将指定进程或处于阻塞状态的进程挂起。")]),_._v(" "),t("li",[_._v("挂起原语的执行过程是\n"),t("ol",[t("li",[_._v("首先检查被挂起进程的状态，若处于活动就绪状态，便将其改为静止就绪；对于活动阻塞状态的进程，则将之改为静止阻塞。")]),_._v(" "),t("li",[_._v("为了方便用户或父进程考查该进程的运行情况而把该进程的PCB复制到某指定的内存区域。")]),_._v(" "),t("li",[_._v("最后，若被挂起的进程正在执行，则转向调度程序重新调度。")])])])])]),_._v(" "),t("li",[_._v("进程的激活过程\n"),t("ul",[t("li",[_._v("当发生激活进程的事件时，例如，父进程或用户进程请求激活指定进程，若该进程驻留在外存而内存中已有足够的空间时，则可将在外存上处于静止状态的进程换入内存。这时，系统将利用激活原语active( )将指定进程激活。激活原语先将进程从外存调入内存，检查该进程的现行状态，若是静止就绪，便将之改为活动就绪；若为静止阻塞便将之改为活动阻塞。")]),_._v(" "),t("li",[_._v("假如采用的是"),t("code",[_._v("抢占调度策略")]),_._v("，则每当有新进程进入就绪队列时，应"),t("code",[_._v("检查是否要进行重新调度")]),_._v("，即由调度程序将被激活进程与当前进程进行优先级的比较，如果被激活进程的优先级更低，就不必重新调度；否则，立即剥夺当前进程的运行，把处理机分配给刚被激活的进程。")])])])]),_._v(" "),t("h2",{attrs:{id:"_2-4-进程同步"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-进程同步"}},[_._v("#")]),_._v(" 2.4 进程同步")]),_._v(" "),t("h4",{attrs:{id:"_2-4-1-进程同步的基本概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-1-进程同步的基本概念"}},[_._v("#")]),_._v(" 2.4.1 进程同步的基本概念")]),_._v(" "),t("ol",[t("li",[t("p",[_._v("两种形式的制约关系")]),_._v(" "),t("ul",[t("li",[_._v("间接相互制约关系，也称为进程的互斥关系。")]),_._v(" "),t("li",[_._v("直接相互制约关系，也称为进程的同步关系。")])])]),_._v(" "),t("li",[t("p",[_._v("临界资源(Critical Resouce)")]),_._v(" "),t("ol",[t("li",[_._v("定义：我们把一次仅允许一个进程访问的资源，或者说不能同时共享的资源称为临界资源。对"),t("code",[_._v("临界资源")]),_._v("的访问应该采取"),t("code",[_._v("互斥方式")]),_._v("。")]),_._v(" "),t("li",[_._v("生产者-消费者(producer-consumer)问题")]),_._v(" "),t("li",[_._v("临界区(critical section): 每个进程中访问临界资源的那段代码称为"),t("code",[_._v("临界区")])]),_._v(" "),t("li",[_._v("同步机制应遵循的规则❗❗❗\n"),t("ul",[t("li",[_._v("空闲让进")]),_._v(" "),t("li",[_._v("忙则等待")]),_._v(" "),t("li",[_._v("有限等待")]),_._v(" "),t("li",[_._v("让权等待")])])])])])]),_._v(" "),t("h4",{attrs:{id:"_2-4-2-硬件同步机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-2-硬件同步机制"}},[_._v("#")]),_._v(" 2.4.2 硬件同步机制")]),_._v(" "),t("ol",[t("li",[_._v("关中断\n[缺点]：\n"),t("ul",[t("li",[_._v("滥用关中断权力可能导致严重后果；")]),_._v(" "),t("li",[_._v("关中断时间过长，会影响系统效率，限制了处理器交叉执行程序的能力；")]),_._v(" "),t("li",[_._v("关中断方法也不适合用于多CPU系统，因为在一个处理器上关中断并不能防止进程在其它处理器上执行相同的临界区代码。")])])]),_._v(" "),t("li",[_._v("利用Test-and-Set指令实现互斥")]),_._v(" "),t("li",[_._v("利用Swap指令实现进程互斥")])]),_._v(" "),t("h4",{attrs:{id:"_2-4-3-信号量机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-3-信号量机制"}},[_._v("#")]),_._v(" 2.4.3 信号量机制")]),_._v(" "),t("ol",[t("li",[_._v("整型信号量")]),_._v(" "),t("li",[_._v("记录型信号量\n"),t("ul",[t("li",[_._v("语句")])]),_._v(" "),t("div",{staticClass:"language-c extra-class"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("typedef")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("struct")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("{")]),_._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("int")]),_._v(" value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("struct")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[_._v("process_control_block")]),t("span",{pre:!0,attrs:{class:"token operator"}},[_._v("*")]),_._v("list"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("}")]),_._v("semaphore"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[_._v("wait")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),_._v("semaphore"),t("span",{pre:!0,attrs:{class:"token operator"}},[_._v("*")]),_._v("S"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("{")]),_._v("\n    S"),t("span",{pre:!0,attrs:{class:"token operator"}},[_._v("->")]),_._v("value"),t("span",{pre:!0,attrs:{class:"token operator"}},[_._v("--")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("if")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),_._v("S"),t("span",{pre:!0,attrs:{class:"token operator"}},[_._v("->")]),_._v("value＜"),t("span",{pre:!0,attrs:{class:"token number"}},[_._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),_._v("  "),t("span",{pre:!0,attrs:{class:"token function"}},[_._v("block")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),_._v("S"),t("span",{pre:!0,attrs:{class:"token operator"}},[_._v("->")]),_._v("list"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),_._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("}")]),_._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[_._v("signal")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),_._v("semaphore"),t("span",{pre:!0,attrs:{class:"token operator"}},[_._v("*")]),_._v("S"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("{")]),_._v("\n    S"),t("span",{pre:!0,attrs:{class:"token operator"}},[_._v("->")]),_._v("value"),t("span",{pre:!0,attrs:{class:"token operator"}},[_._v("++")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("if")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),_._v("S"),t("span",{pre:!0,attrs:{class:"token operator"}},[_._v("->")]),_._v("value"),t("span",{pre:!0,attrs:{class:"token operator"}},[_._v("<=")]),t("span",{pre:!0,attrs:{class:"token number"}},[_._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),_._v("  "),t("span",{pre:!0,attrs:{class:"token function"}},[_._v("wakeup")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),_._v("S"),t("span",{pre:!0,attrs:{class:"token operator"}},[_._v("->")]),_._v("list"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("}")]),_._v("\n\n")])])]),t("ul",[t("li",[_._v("S->value的初值表示系统中某类资源的数目，因而又称为资源信号量")]),_._v(" "),t("li",[_._v("对它的每次wait操作，意味着进程请求一个单位的该类资源，因此描述为S->value--;")]),_._v(" "),t("li",[_._v("当S->value<0时，表示该类资源已分配完毕，因此进程应调用block原语，进行自我阻塞，放弃处理机，并插入到信号量链表S->list中")]),_._v(" "),t("li",[_._v("对信号量的每次signal操作，表示执行进程释放一个单位资源，故S->value++操作表示资源数目加1")]),_._v(" "),t("li",[_._v("若加1后仍是S->value<=0，则表示在该信号量链表中，仍有等待该资源的进程被阻塞，故还应调用wakeup原语，将S->list链表中的第一个等待进程唤醒")]),_._v(" "),t("li",[_._v("如果S->value的初值为1，表示只允许一个进程访问临界资源，此时的信号量转化为互斥信号量")])])]),_._v(" "),t("li",[_._v("AND型信号量")]),_._v(" "),t("li",[_._v("信号量集")])]),_._v(" "),t("hr"),_._v(" "),t("p",[_._v("例1：设有n个进程共享一个程序段，对于如下两种情况：\n- 如果每次只允许一个进程进入该程序段；\n- 如果每次最多允许m个进程（m＜n）同时进入该程序段；\n试问：所采用的信号量初值是否相同？信号量值的变化范围如何？")]),_._v(" "),t("hr"),_._v(" "),t("p",[_._v("例2：\n有一单向行驶的公路桥，每次只允许一辆汽车通过。"),t("br"),_._v("\n当汽车到达桥头时，若桥上无车，便可上桥；否则需等待，直到桥上的汽车下桥为止。"),t("br"),_._v("\n若每一辆车为一个进程，请用P、V操作保证汽车按要求过桥。")]),_._v(" "),t("hr"),_._v(" "),t("p",[_._v("例3：在公共汽车上，司机和售票员各行其职，司机负责开车和到站停车;"),t("br"),_._v("\n售票员负责售票和开、关车门，当售票员关好车门后，驾驶员才能开车行驶。"),t("br"),_._v("\n试用P、V操作实现司机与售票员间的同步。")]),_._v(" "),t("hr"),_._v(" "),t("p",[_._v("思考题：某车站售票厅，任何时刻最多可容纳20名购票者进入，当售票厅中少于20名购票者时，则厅外的购票者可立即进入，否则需在外面等待。\n若把一个购票者看作一个进程，请回答下列问题：")]),_._v(" "),t("ul",[t("li",[_._v("用P、V操作管理这些并发进程时，应怎样定义信号量，写出信号量的初值以及信号量各种取值的含义。")]),_._v(" "),t("li",[_._v("若欲购票者最多为n个人，写出信号量可能的变化范围(最大值和最小值)。")])]),_._v(" "),t("hr"),_._v(" "),t("h4",{attrs:{id:"_2-4-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-4"}},[_._v("#")]),_._v(" 2.4.4")]),_._v(" "),t("h4",{attrs:{id:"_2-4-5-管程机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-5-管程机制"}},[_._v("#")]),_._v(" 2.4.5 管程机制")]),_._v(" "),t("ol",[t("li",[_._v("管程的定义 : 管程由三部分组成\n"),t("ul",[t("li",[_._v("局部于管程的共享变量说明")]),_._v(" "),t("li",[_._v("对该数据结构进行操作的一组过程")]),_._v(" "),t("li",[_._v("对局部于管程的数据设置初始值的语句")]),_._v(" "),t("li",[_._v("此外，还须为管程赋予一个名字")]),_._v(" "),t("li",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Nightliuguoxing/Pic@main/image/os/1619512931934-OS2451.jpg",alt:"管程的示意图"}})])])]),_._v(" "),t("li",[_._v("条件变量")])]),_._v(" "),t("h2",{attrs:{id:"_2-5-经典进程的同步问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-经典进程的同步问题"}},[_._v("#")]),_._v(" 2.5 经典进程的同步问题")]),_._v(" "),t("h4",{attrs:{id:"_2-5-1-生产者-消费者问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-1-生产者-消费者问题"}},[_._v("#")]),_._v(" 2.5.1 生产者—消费者问题")]),_._v(" "),t("ol",[t("li",[t("p",[_._v("利用记录型信号量解决生产者—消费者问题")]),_._v(" "),t("hr"),_._v(" "),t("p",[_._v("注意：")]),_._v(" "),t("ul",[t("li",[_._v("在每个程序中用于实现互斥的wait(mutex)和signal(mutex)必须成对地出现；")]),_._v(" "),t("li",[_._v("对资源信号量empty和full的wait和signal操作，同样需要成对地出现，但它们分别处于不同的程序中。例如，wait(empty)在计算进程中，而signal(empty)则在打印进程中，计算进程若因执行wait(empty)而阻塞，则以后将由打印进程将它唤醒；")]),_._v(" "),t("li",[_._v("在每个程序中的多个wait操作顺序不能颠倒。应先执行对资源信号量的wait操作，然后再执行对互斥信号量的wait操作，否则可能引起进程死锁。")])]),_._v(" "),t("hr")]),_._v(" "),t("li",[t("p",[_._v("利用AND信号量解决生产者—消费者问题")])])]),_._v(" "),t("h4",{attrs:{id:"_2-5-2-哲学家进餐问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-2-哲学家进餐问题"}},[_._v("#")]),_._v(" 2.5.2 哲学家进餐问题")]),_._v(" "),t("p",[_._v("{% note default simple %}\n"),t("code",[_._v("问题描述")]),_._v("：\n有五位哲学家共用一张圆桌，分别坐在周围的五张椅子上，在圆桌上有五只碗和五只筷子，他们的生活方式是交替地进行思考和进餐。平时，一个哲学家进行思考，饥饿时便试图取用其左右最靠近他的筷子，只有在他拿到两只筷子时才能进餐。进餐完毕，放下筷子继续思考。\n{% endnote %}")]),_._v(" "),t("ol",[t("li",[t("p",[_._v("利用记录型信号量解决哲学家进餐问题")]),_._v(" "),t("ul",[t("li",[_._v("记录型信号量")])]),_._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("semaphore chopstick[5]={1,1,1,1,1};\n")])])])]),_._v(" "),t("li",[t("p",[_._v("利用AND信号量机制解决哲学家进餐问题")]),_._v(" "),t("ul",[t("li",[_._v("AND信号量")])]),_._v(" "),t("div",{staticClass:"language-c extra-class"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[_._v("semaphore chopstick"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[_._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("]")]),t("span",{pre:!0,attrs:{class:"token operator"}},[_._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("{")]),t("span",{pre:!0,attrs:{class:"token number"}},[_._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[_._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[_._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[_._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[_._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[_._v("processi")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("{")]),_._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("do")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("{")]),_._v("\n    think"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[_._v("Sswait")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),_._v("chopstick［"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),_._v("i"),t("span",{pre:!0,attrs:{class:"token operator"}},[_._v("+")]),t("span",{pre:!0,attrs:{class:"token number"}},[_._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[_._v("%")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[_._v("5")]),_._v("］"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" chopstick ［i］"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("\n    eat"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[_._v("Ssignal")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),_._v("chopstick ［"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),_._v("i"),t("span",{pre:!0,attrs:{class:"token operator"}},[_._v("+")]),t("span",{pre:!0,attrs:{class:"token number"}},[_._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[_._v("%")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[_._v("5")]),_._v("］"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" chopstick ［i］"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("}")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("while")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),_._v("TRUE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v(" \n")])])])]),_._v(" "),t("li",[t("p",[_._v("不会死锁的哲学家进餐问题的解决方案")]),_._v(" "),t("ul",[t("li",[_._v("至多允许四位哲学家同时去拿左边的筷子，最终能保证至少有一位哲学家能够就餐，并在用餐完毕时能释放出用过的两只筷子，从而使更多的哲学家能够就餐")]),_._v(" "),t("li",[_._v("仅当哲学家的左右两只筷子均可用时，才允许他拿起筷子进餐。即利用AND型信号量解决哲学家进餐问题")]),_._v(" "),t("li",[_._v("规定奇数号哲学家先拿左边的筷子，再拿右边的筷子；而偶数号哲学家则相反")])])])]),_._v(" "),t("h4",{attrs:{id:"_2-5-3-读者-写者问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-3-读者-写者问题"}},[_._v("#")]),_._v(" 2.5.3 读者-写者问题")]),_._v(" "),t("hr"),_._v(" "),t("p",[_._v("问题描述：一个数据文件或记录，可被多个进程共享，我们把只要求读该文件的进程称为“Reader进程”，其它进程则称为“Writer进程”。允许多个进程同时读一个共享对象，因为读操作不会使数据文件混乱。但不允许一个Writer进程和其它Reader进程或Writer进程同时访问共享对象，因为这种访问将会引起混乱。所谓“读者-写者问题（Reader-Writer Problem）”是指保证一个Writer进程必须与其它进程互斥地访问共享对象的同步问题。读者-写者问题常被用来测试新同步原语")]),_._v(" "),t("hr"),_._v(" "),t("ol",[t("li",[t("p",[_._v("利用记录型信号量解决读者-写者问题")]),_._v(" "),t("ul",[t("li",[_._v("为实现Reader与Writer进程间在读或写时的互斥需设置一个互斥信号量wmutex")]),_._v(" "),t("li",[_._v("设置一个整型变量Readcount表示正在读的进程数目。由于只要有一个Reader进程在读，便不允许Writer进程去写。因此，仅当Readcount=0, 表示尚无Reader进程在读时，Reader进程才需要执行Wait(wmutex)操作。若wait(wmutex)操作成功，Reader进程便可去读，相应地，做Readcount+1操作。同理，仅当Reader进程在执行了Readcount减1操作后其值为0时，才须执行signal(wmutex)操作，以便让Writer进程写")]),_._v(" "),t("li",[_._v("因为Readcount是一个可被多个Reader进程访问的临界资源，因此，应该为它设置一个互斥信号量rmutex")])])]),_._v(" "),t("li",[t("p",[_._v("利用信号量集机制解决读者-写者问题")])])]),_._v(" "),t("hr"),_._v(" "),t("p",[_._v("例1: 桌上有一空盘，只允许放入一个水果。\n爸爸专向盘中放苹果，妈妈专向盘中放桔子。\n女儿专等着吃盘中的苹果，儿子专等着吃盘中的桔子。\n试用P、V原语实现爸爸、妈妈、儿子和女儿间能同步的算法")]),_._v(" "),t("hr"),_._v(" "),t("p",[_._v("例2: 有一阅览室，共有100个座位，\n读者进入时必须先在一张登记表上登记，该表为每一座位列一表目，包括座号和姓名。\n读者离开时要注销掉登记内容。\n试用某一种语言（或类语言）和P、V操作描述读者进程的同步机构")]),_._v(" "),t("hr"),_._v(" "),t("h4",{attrs:{id:"_2-5-4-利用管程机制解决进程同步问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-4-利用管程机制解决进程同步问题"}},[_._v("#")]),_._v(" 2.5.4 利用管程机制解决进程同步问题")]),_._v(" "),t("ol",[t("li",[_._v("利用管程解决生产者-消费者问题")]),_._v(" "),t("li",[_._v("利用管程解决哲学家就餐问题：")])]),_._v(" "),t("h2",{attrs:{id:"_2-6-进程通信"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-进程通信"}},[_._v("#")]),_._v(" 2.6 进程通信")]),_._v(" "),t("hr"),_._v(" "),t("p",[_._v("进程通信，是指进程之间的信息交换。进程之间的互斥和同步，由于其所交换的信息量少而被归结为低级通信。能传送大量数据的通信方式称为高级通信")]),_._v(" "),t("hr"),_._v(" "),t("h4",{attrs:{id:"_2-6-1-进程通信的类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-1-进程通信的类型"}},[_._v("#")]),_._v(" 2.6.1 进程通信的类型")]),_._v(" "),t("ol",[t("li",[t("p",[_._v("共享存储器系统(Shared-Memory System)")]),_._v(" "),t("ul",[t("li",[_._v("基于共享数据结构的通信方式: 如生产者-消费者问题中的缓冲池buffer")]),_._v(" "),t("li",[_._v("基于共享存储区的通信方式")])])]),_._v(" "),t("li",[t("p",[_._v("管道(Pipe)通信系统")]),_._v(" "),t("ul",[t("li",[_._v("所谓“管道”，是指用于连接一个读进程和一个写进程以实现他们之间通信的一个共享文件，又名pipe文件")]),_._v(" "),t("li",[_._v("管道机制必须提供以下三方面的协调能力\n"),t("ul",[t("li",[_._v("互斥，即当一个进程正在对pipe执行读/写操作时，其它(另一)进程必须等待。")]),_._v(" "),t("li",[_._v("同步，指当写(输入)进程把一定数量(如4 KB)的数据写入pipe，便去睡眠等待，直到读(输出)进程取走数据后，再把他唤醒。当读进程读一空pipe时，也应睡眠等待，直至写进程将数据写入管道后，才将之唤醒。")]),_._v(" "),t("li",[_._v("确定对方是否存在，只有确定了对方已存在时，才能进行通信。")])])])])]),_._v(" "),t("li",[t("p",[_._v("消息传递系统(Message passing system)")]),_._v(" "),t("ul",[t("li",[_._v("又因其实现方式的不同而进一步分成直接通信方式和间接通信方式两种")])])]),_._v(" "),t("li",[t("p",[_._v("客户机-服务器系统(Client-Server  system)")]),_._v(" "),t("ul",[t("li",[_._v("套接字\n"),t("ul",[t("li",[_._v("基于文件型")]),_._v(" "),t("li",[_._v("基于网络型")])])]),_._v(" "),t("li",[_._v("远程过程调用和远程方法调用")])])])]),_._v(" "),t("h4",{attrs:{id:"_2-6-2-消息传递通信的实现方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-2-消息传递通信的实现方式"}},[_._v("#")]),_._v(" 2.6.2 消息传递通信的实现方式")]),_._v(" "),t("ol",[t("li",[t("p",[_._v("直接消息传递系统")]),_._v(" "),t("ul",[t("li",[_._v("直接通信原语\n"),t("ul",[t("li",[_._v("对称寻址方式")]),_._v(" "),t("li",[_._v("非对称寻址方式")])])]),_._v(" "),t("li",[_._v("消息的格式")]),_._v(" "),t("li",[_._v("进程同步方式\n"),t("ul",[t("li",[_._v("发送进程阻塞、 接收进程阻塞（汇合）")]),_._v(" "),t("li",[_._v("发送进程不阻塞、 接收进程阻塞")]),_._v(" "),t("li",[_._v("发送进程和接收进程均不阻塞")])])]),_._v(" "),t("li",[_._v("通信链路(communication link)\n"),t("ul",[t("li",[_._v("连接方法\n"),t("ul",[t("li",[_._v("点—点")]),_._v(" "),t("li",[_._v("多点连接链路")])])]),_._v(" "),t("li",[_._v("通信方式\n"),t("ul",[t("li",[_._v("单向通信链路")]),_._v(" "),t("li",[_._v("双向链路")])])])])])])]),_._v(" "),t("li",[t("p",[_._v("间接通信方式 （信箱通信）")]),_._v(" "),t("ul",[t("li",[_._v("信箱的结构\n"),t("ul",[t("li",[_._v("信箱定义为一种数据结构。在逻辑上可以将其分为两个部分：")]),_._v(" "),t("li",[_._v("信箱头：用以存放有关信箱的描述信息，如信箱标识符、信箱的拥有者、信箱口令、信箱的空格数等。")]),_._v(" "),t("li",[_._v("信箱体：由若干个可以存放消息（或消息头）的信箱格组成，信箱格的数目以及每格的大小是在创建信箱时确定的。")])])]),_._v(" "),t("li",[_._v("信箱通信原语\n"),t("ul",[t("li",[_._v("信箱的创建和撤消")]),_._v(" "),t("li",[_._v("消息的发送和接收")])])]),_._v(" "),t("li",[_._v("信箱的类型\n"),t("ul",[t("li",[_._v("私用信箱: 由用户进程创建")]),_._v(" "),t("li",[_._v("公用信箱: 由操作系统创建")]),_._v(" "),t("li",[_._v("共享信箱: 由某进程创建")])])]),_._v(" "),t("li",[_._v("发送进程和接受进程的关系\n"),t("ul",[t("li",[_._v("一对一关系")]),_._v(" "),t("li",[_._v("多对一关系")]),_._v(" "),t("li",[_._v("一对多关系")]),_._v(" "),t("li",[_._v("多对多关系")])])])])])]),_._v(" "),t("h4",{attrs:{id:"_2-6-3-消息缓冲队列通信机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-3-消息缓冲队列通信机制"}},[_._v("#")]),_._v(" 2.6.3 消息缓冲队列通信机制")]),_._v(" "),t("ol",[t("li",[_._v("消息缓冲队列通信机制中的数据结构\n"),t("ul",[t("li",[_._v("消息缓冲区。在消息缓冲队列通信方式中，主要利用的数据结构是消息缓冲区")]),_._v(" "),t("li",[_._v("PCB中有关通信的数据项。在利用消息缓冲队列通信机制时，在设置消息缓冲队列的同时，还应增加用于对消息队列进行操作和实现同步的信号量，并将它们置入进程的PCB中")])])]),_._v(" "),t("li",[_._v("发送原语\n"),t("ul",[t("li",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Nightliuguoxing/Pic@main/image/os/1619513034225-OS2632.jpg",alt:"消息缓冲通信"}})])])]),_._v(" "),t("li",[_._v("接收原语")])]),_._v(" "),t("h2",{attrs:{id:"_2-7-线程的基本概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-线程的基本概念"}},[_._v("#")]),_._v(" 2.7  线程的基本概念")]),_._v(" "),t("h4",{attrs:{id:"_2-7-1-线程-threads-的引入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-1-线程-threads-的引入"}},[_._v("#")]),_._v(" 2.7.1 线程（Threads）的引入")]),_._v(" "),t("ol",[t("li",[_._v("进程的两个基本属性\n"),t("ul",[t("li",[_._v("进程是一个可拥有资源的独立单位，也是一个可独立调度和分派的基本单位。")])])]),_._v(" "),t("li",[_._v("程序并发执行所需付出的时空开销\n"),t("ul",[t("li",[_._v("创建进程")]),_._v(" "),t("li",[_._v("进程切换")]),_._v(" "),t("li",[_._v("撤消进程")])])]),_._v(" "),t("li",[_._v("线程-作为调度和分派的基本单位")])]),_._v(" "),t("h4",{attrs:{id:"_2-7-2-线程与进程的比较"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-2-线程与进程的比较"}},[_._v("#")]),_._v(" 2.7.2 线程与进程的比较")]),_._v(" "),t("ol",[t("li",[_._v("调度的基本单位")]),_._v(" "),t("li",[_._v("并发性")]),_._v(" "),t("li",[_._v("拥有资源")]),_._v(" "),t("li",[_._v("独立性")]),_._v(" "),t("li",[_._v("系统开销：创建、撤销、切换")]),_._v(" "),t("li",[_._v("支持多处理机系统")])]),_._v(" "),t("h4",{attrs:{id:"_2-7-3-线程的状态和线程控制块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-3-线程的状态和线程控制块"}},[_._v("#")]),_._v(" 2.7.3 线程的状态和线程控制块")]),_._v(" "),t("ol",[t("li",[_._v("线程运行的三个状态\n"),t("ul",[t("li",[_._v("执行状态，表示线程正获得处理机而运行；")]),_._v(" "),t("li",[_._v("就绪状态，指线程已具备了各种执行条件，一旦获得CPU便可执行的状态；")]),_._v(" "),t("li",[_._v("阻塞状态，指线程在执行中因某事件而受阻，处于暂停执行时的状态。")])])]),_._v(" "),t("li",[_._v("线程控制块\n"),t("ul",[t("li",[_._v("线程标识符")]),_._v(" "),t("li",[_._v("一组寄存器，它包括程序计数器PC和堆栈指针中的内容")]),_._v(" "),t("li",[_._v("线程运行状态，用于描述线程正处于何种运行状态")]),_._v(" "),t("li",[_._v("优先级，描述线程执行的优先程度")]),_._v(" "),t("li",[_._v("线程专有存储器，用于保存线程自己的局部变量拷贝")]),_._v(" "),t("li",[_._v("信号屏蔽，即对某些信号加以屏蔽")]),_._v(" "),t("li",[_._v("堆栈指针，在堆栈中通常保存有局部变量和返回地址")])])]),_._v(" "),t("li",[_._v("多线程OS中的进程属性\n"),t("ul",[t("li",[_._v("进程是一个可拥有资源的基本单位")]),_._v(" "),t("li",[_._v("多个线程可并发执行")]),_._v(" "),t("li",[_._v("进程已不是可执行的实体")])])])]),_._v(" "),t("h2",{attrs:{id:"_2-8-线程的实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-8-线程的实现"}},[_._v("#")]),_._v(" 2.8  线程的实现")]),_._v(" "),t("h4",{attrs:{id:"_2-8-1-线程的实现方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-8-1-线程的实现方式"}},[_._v("#")]),_._v(" 2.8.1 线程的实现方式")]),_._v(" "),t("ol",[t("li",[_._v("内核支持线程KST(Kernel Supported Threads)\n"),t("ul",[t("li",[_._v("优点\n"),t("ul",[t("li",[_._v("在多处理机系统中，一个进程中的多个线程可并行执行")]),_._v(" "),t("li",[_._v("如果一个线程阻塞了，内核可以调度该进程中的另一个线程或其它进程中的一个线程执行")]),_._v(" "),t("li",[_._v("内核支持线程切换较快，开销小")]),_._v(" "),t("li",[_._v("内核支持线程本身也可以采用多线程技术")])])]),_._v(" "),t("li",[_._v("缺点\n"),t("ul",[t("li",[_._v("其模式切换的开销较大")])])])])]),_._v(" "),t("li",[_._v("用户级线程\n"),t("ul",[t("li",[_._v("优点\n"),t("ul",[t("li",[_._v("线程切换不需要转换到内核空间")]),_._v(" "),t("li",[_._v("调度算法可以是进程专用的")]),_._v(" "),t("li",[_._v("用户级线程的实现与OS平台无关")])])]),_._v(" "),t("li",[_._v("缺点\n"),t("ul",[t("li",[_._v("系统调用的阻塞问题")]),_._v(" "),t("li",[_._v("在单纯的用户级线程方式中，内核每次分配给一个进程一个CPU，因此进程中仅有一个线程能执行")])])])])]),_._v(" "),t("li",[_._v("组合方式\n"),t("ul",[t("li",[_._v("三种不同的模型\n"),t("ul",[t("li",[_._v("多对一模型")]),_._v(" "),t("li",[_._v("一对一模型")]),_._v(" "),t("li",[_._v("多对多模型")])])])])])]),_._v(" "),t("h4",{attrs:{id:"_2-8-2-线程的实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-8-2-线程的实现"}},[_._v("#")]),_._v(" 2.8.2 线程的实现")]),_._v(" "),t("ol",[t("li",[_._v("内核支持线程的实现")]),_._v(" "),t("li",[_._v("用户级线程的实现（两种方式）\n"),t("ul",[t("li",[_._v("运行时系统(Runtime System)")]),_._v(" "),t("li",[_._v("内核控制线程")])])])]),_._v(" "),t("h4",{attrs:{id:"_2-8-3-线程的创建和终止"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-8-3-线程的创建和终止"}},[_._v("#")]),_._v(" 2.8.3 线程的创建和终止")]),_._v(" "),t("ol",[t("li",[_._v("线程的创建")]),_._v(" "),t("li",[_._v("线程的终止\n"),t("ul",[t("li",[_._v("一种是在线程完成了自己的工作后自愿退出")]),_._v(" "),t("li",[_._v("另一种是线程在运行中出现错误或由于某种原因而被其它线程强行终止")])])])]),_._v(" "),t("hr"),_._v(" "),t("p",[_._v("某寺庙，有小和尚、老和尚若干。\n有一水缸，由小和尚提水入缸供老和尚饮用。\n水缸可容10桶水，水取自同一井中。水井径窄，每次只能容一个桶取水。\n水桶总数为3个。\n每次入、取缸水仅为1桶，且不可同时进行。\n试给出有关取水、入水的算法描述.")]),_._v(" "),t("hr"),_._v(" "),t("p",[_._v("假设有一个成品仓库，总共能放8台成品，生产者进程生产产品放入仓库，消费者进程从仓库中取出成品消费。\n为了防止积压，仓库满的时候就停止生产。\n由于仓库搬运设备只有一套，故成品的存入和取出只能分别执行，\n使用P、V操作来实现该方案")]),_._v(" "),t("hr"),_._v(" "),t("h2",{attrs:{id:"强化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#强化"}},[_._v("#")]),_._v(" 强化")]),_._v(" "),t("hr"),_._v(" "),t("p",[_._v("例1: 试从物理概念上说明记录型信号量wait和signal的含义\n- 每次的wait(s)操作，意味着进程请求分配该类资源的一个单位资源。相反，执行一次signal(s) 操作意味着进程释放相应资源的一个单位资源。\n- 当s.value>0时，表示某类可用资源的数量；\n- 当s.value=0时，表示该类资源正好分配完，无进程等待；\n- 当s.value<0时，表示该类资源已分配完。若有进程请求该类资源，则被阻塞，其绝对值等于等待该类资源的进程数。")]),_._v(" "),t("hr"),_._v(" "),t("p",[_._v("例2: 设有n个进程共享一个程序段，对于如下两种情况：")]),_._v(" "),t("ul",[t("li",[_._v("如果每次只允许一个进程进入该程序段；")]),_._v(" "),t("li",[_._v("如果每次最多允许m个进程（m＜n）同时进入该程序段；")])]),_._v(" "),t("hr"),_._v(" "),t("p",[_._v("例3: 有一单向行驶的公路桥，每次只允许一辆汽车通过。当汽车到达桥头时，若桥上无车，便可上桥；否则需等待，直到桥上的汽车下桥为止。若每一辆车为一个进程，请用P、V操作保证汽车按要求过桥。")]),_._v(" "),t("hr"),_._v(" "),t("p",[_._v("例4: 在公共汽车上，司机和售票员各行其职，司机负责开车和到站停车；售票员负责售票和开、关车门，当售票员关好车门后，驾驶员才能开车行驶。汽车在正常行驶的过程中售票员售票。试用P、V操作实现司机与售票员间的同步。")]),_._v(" "),t("hr"),_._v(" "),t("p",[_._v("例5: 某车站售票厅，任何时刻最多可容纳20名购票者进入，当售票厅中少于20名购票者时，则厅外的购票者可立即进入，否则需在外面等待。若把一个购票者看作一个进程，请回答下列问题：")]),_._v(" "),t("ul",[t("li",[_._v("用P、V操作管理这些并发进程时，应怎样定义信号量，写出信号量的初值以及信号量各种取值的含义。")]),_._v(" "),t("li",[_._v("若欲购票者最多为n个人，写出信号量可能的变化范围(最大值和最小值)。")])]),_._v(" "),t("hr"),_._v(" "),t("p",[_._v("例6: 有两个并发进程put、get，这两个进程共用一个缓冲区S（其大小为每次存放一个数据），put将数据存放入S，get将数据从S中取出。在将缓冲区中的上一个数据取走之前不能放入新数据，缓冲区初始化时为空。\n试用P,V操作实现这两个进程间的同步，并写出程序描述。")]),_._v(" "),t("hr"),_._v(" "),t("p",[_._v("例7: 桌上有一空盘，允许存放一只水果。爸爸可向盘中放苹果，也可向盘中放桔子，儿子专等吃盘中的桔子，女儿专等吃盘中的苹果。 规定:当盘空时一次只能放一只水果供吃者取用。\n请用P、V原语实现爸爸、儿子、女儿三个并发进程的同步。")]),_._v(" "),t("hr"),_._v(" "),t("p",[_._v("例8: 三个进程P1、P2、P3互斥使用一个包含N(N>0)个单元的缓冲区。P1每次用produce()生成一个正整数并用put()送入缓冲区某一空单元中；P2每次用getodd()从该缓冲区中取出一个奇数并用countodd()统计奇数个数；P3每次用geteven()从该缓冲区中取出一个偶数并用counteven()统计偶数个数。请用信号量机制实现这三个进程的同步与互斥活动，并说明所定义信号量的含义。要求用伪代码描述。")]),_._v(" "),t("hr")])}),[],!1,null,null,null);v.default=s.exports}}]);