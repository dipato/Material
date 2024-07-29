"use strict";(self.webpackChunkmaterial=self.webpackChunkmaterial||[]).push([[8755],{4721:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>x,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var s=n(4848),i=n(8453),t=(n(1470),n(9365),n(168));const o={sidebar_position:2,sidebar_label:"Section 2"},c="Perception Layer - Section 2",d={id:"Theory/PerceptionLayer/section2",title:"Perception Layer - Section 2",description:"* Understand the basic concepts for prototyping",source:"@site/docs/Theory/PerceptionLayer/section2.md",sourceDirName:"Theory/PerceptionLayer",slug:"/Theory/PerceptionLayer/section2",permalink:"/Material/docs/Theory/PerceptionLayer/section2",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Section 2"},sidebar:"theorySidebar",previous:{title:"Section 1",permalink:"/Material/docs/Theory/PerceptionLayer/section1"},next:{title:"Section 3",permalink:"/Material/docs/Theory/PerceptionLayer/section3"}},l={},h=[{value:"Introduction",id:"introduction",level:2},{value:"Laboratory components",id:"laboratory-components",level:2},{value:"Pin map (pinout)",id:"pin-map-pinout",level:2},{value:"Basic prototyping using Fritzing",id:"basic-prototyping-using-fritzing",level:2},{value:"References",id:"references",level:2}];function a(e){const r={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{Details:o}=r;return o||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"perception-layer---section-2",children:"Perception Layer - Section 2"}),"\n",(0,s.jsxs)("div",{style:{textAlign:"justify"},children:[(0,s.jsxs)(r.admonition,{type:"note",children:[(0,s.jsx)(r.mdxAdmonitionTitle,{children:(0,s.jsx)(r.strong,{children:"Objectives"})}),(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Understand the basic concepts for prototyping"}),"\n",(0,s.jsx)(r.li,{children:"Explore some of the sensors available in the laboratory"}),"\n"]})]}),(0,s.jsx)(r.h2,{id:"introduction",children:"Introduction"}),(0,s.jsxs)(r.p,{children:["The use of sensors and actuators allows things to interact with the real world. In this session, the main concepts related to sensors and actuators will be explored by analyzing a series of examples that demonstrate their basic use. Before starting this session, it is recommended to review the following material to get contextualized, ",(0,s.jsx)(r.strong,{children:"Interact with the phisycal world"})," (",(0,s.jsx)(r.a,{href:"https://github.com/microsoft/IoT-For-Beginners/blob/main/slides/lesson-3.pdf",children:"lesson 3"}),") from ",(0,s.jsx)(r.strong,{children:"IoT for Beginners"})," (",(0,s.jsx)(r.a,{href:"https://github.com/microsoft/IoT-For-Beginners",children:"link"}),") of Microsoft."]}),(0,s.jsx)(t.A,{src:n(9531).A,alt:"interaccion_ambiente",className:"custom-img",caption:"Source: Components of IoT Apps, <a href='https://github.com/microsoft/IoT-For-Beginners/blob/main/slides/lesson-3.pdf'>IoT-For-Beginners</a>."}),(0,s.jsx)(r.h2,{id:"laboratory-components",children:"Laboratory components"}),(0,s.jsx)(r.p,{children:"In the laboratory, there are a large number of elements for prototyping. The following table describes the hardware elements to be used in the lab:"}),(0,s.jsxs)(o,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)(r.strong,{children:"Elements to be used"})}),(0,s.jsxs)("div",{children:[(0,s.jsx)(r.p,{children:"The main elements that will be used throughout the course are described below:"}),(0,s.jsxs)(o,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Development systems"})})}),(0,s.jsx)("div",{children:(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Element"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Arduino Uno"}),(0,s.jsxs)(r.td,{children:["Development board Arduino Uno (",(0,s.jsx)(r.a,{href:"https://docs.arduino.cc/hardware/uno-rev3",children:"link"}),")"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Development board ESP8266 NodeMCU WiFi Devkit"}),(0,s.jsx)(r.td,{children:"Development board based on ESP8266 (poner link)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Development board NodeMCU-32S"}),(0,s.jsx)(r.td,{children:"Development board based on ESP-32S (poner link)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["Arduino Nano 33 BLE Sense ",(0,s.jsx)(r.em,{children:(0,s.jsx)(r.strong,{children:"Lite"})})]}),(0,s.jsxs)(r.td,{children:["Development board Arduino Nano 33 BLE Sense ",(0,s.jsx)(r.em,{children:(0,s.jsx)(r.strong,{children:"Lite"})})," (",(0,s.jsx)(r.a,{href:"https://docs.arduino.cc/hardware/nano-33-ble-sense",children:"link"}),"). ",(0,s.jsx)(r.strong,{children:"Important"}),": Please take into account the information given in the following ",(0,s.jsx)(r.a,{href:"https://forum.arduino.cc/t/a-difference-between-a-n-33-ble-sense-vs-sense-lite/1030305/3",children:"foro"})]})]})]})]})})]}),(0,s.jsxs)(o,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Sensors Kit"})})}),(0,s.jsx)("div",{children:(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Element"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Grove - Starter Kit v3"}),(0,s.jsxs)(r.td,{children:["Rapid prototyping development kit (",(0,s.jsx)(r.a,{href:"https://wiki.seeedstudio.com/Grove_Starter_Kit_v3/",children:"link"}),")"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"37 sensor kit Elegoo"}),(0,s.jsxs)(r.td,{children:["Rapid prototyping development kit Elegoo (",(0,s.jsx)(r.a,{href:"http://spot.pcc.edu/~dgoldman/labs/37SENSORKIT.pdf",children:"link"}),")"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"AlphaBot2 robot building kit for Arduino/Pi/PiZero"}),(0,s.jsxs)(r.td,{children:["Prototyping development kit for robots AlphaBot2 (",(0,s.jsx)(r.a,{href:"https://www.waveshare.com/wiki/AlphaBot2",children:"link"}),")"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Landzo 37 In 1 Sensors Kit For Arduino"}),(0,s.jsxs)(r.td,{children:["Sensors Kit for prototyping Landzo (",(0,s.jsx)(r.a,{href:"https://www.instructables.com/Arduino-37-in-1-Sensors-Kit-Explained/",children:"link"}),")"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Tiny Machine Learning Kit"}),(0,s.jsxs)(r.td,{children:["Tiny Machine Learning Kit ",(0,s.jsx)(r.a,{href:"https://tinyml.seas.harvard.edu/assets/other/4D/22.03.11_Marcelo_Rovai_Handout.pdf",children:"[User manual]"})," ",(0,s.jsx)(r.a,{href:"https://store-usa.arduino.cc/products/arduino-tiny-machine-learning-kit?queryID=undefined&selectedStore=us",children:"[link1]"})," ",(0,s.jsx)(r.a,{href:"https://www.farnell.com/datasheets/3295973.pdf",children:"[link2]"})]})]})]})]})})]})]})]}),(0,s.jsx)(r.h2,{id:"pin-map-pinout",children:"Pin map (pinout)"}),(0,s.jsxs)(o,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)(r.strong,{children:"Development boards"})}),(0,s.jsxs)("div",{children:[(0,s.jsx)(r.p,{children:"The main elements that will be used throughout the course are described below:"}),(0,s.jsxs)(o,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Arduino UNO"})})}),(0,s.jsxs)("div",{children:[(0,s.jsx)(r.p,{children:"The Arduino UNO board is an open-source platform based on the ATmega328P microcontroller, powered at 5V (when powered via USB) or with a DC voltage between 7-12V when powered through the jack connector."}),(0,s.jsxs)(r.p,{children:["Before starting to work with any development platform, it is necessary to at least know its pin map. Below is the pin map for the Arduino UNO board (",(0,s.jsx)(r.a,{href:"https://store-usa.arduino.cc/products/arduino-uno-rev3",children:"link"}),")"]}),(0,s.jsx)(t.A,{src:n(1847).A,alt:"uno-r3",className:"custom-img"}),(0,s.jsx)(r.p,{children:"The following table summarizes the pin map information for the Arduino UNO:"}),(0,s.jsxs)(r.p,{children:["For more information about the board, you can refer to the link ",(0,s.jsx)(r.strong,{children:"Arduino Uno Board Anatomy"})," (",(0,s.jsx)(r.a,{href:"https://docs.arduino.cc/tutorials/uno-rev3/board-anatomy",children:"link"}),"). The following table summarizes the information about the pins for this board:"]}),(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Pin notation (board)"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Digital/GPIO"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:"D0"}),", ",(0,s.jsx)(r.code,{children:"D1"}),", ",(0,s.jsx)(r.code,{children:"D2"}),", ",(0,s.jsx)(r.code,{children:"~D3"}),", ",(0,s.jsx)(r.code,{children:"D4"}),", ",(0,s.jsx)(r.code,{children:"~D5"}),", ",(0,s.jsx)(r.code,{children:"~D6"}),", ",(0,s.jsx)(r.code,{children:"D7"}),", ",(0,s.jsx)(r.code,{children:"D8"}),", ",(0,s.jsx)(r.code,{children:"~D9"})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Analog in"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:"A0"}),", ",(0,s.jsx)(r.code,{children:"A1"}),", ",(0,s.jsx)(r.code,{children:"A2"}),", ",(0,s.jsx)(r.code,{children:"A3"}),", ",(0,s.jsx)(r.code,{children:"A4"}),", ",(0,s.jsx)(r.code,{children:"A5"})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"PWM"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:"~D3"}),", ",(0,s.jsx)(r.code,{children:"~D5"}),", ",(0,s.jsx)(r.code,{children:"~D6"}),", ",(0,s.jsx)(r.code,{children:"~D9"}),", ",(0,s.jsx)(r.code,{children:"~D10"}),", ",(0,s.jsx)(r.code,{children:"~D11"})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Serial (UART)"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:"Tx->"}),", ",(0,s.jsx)(r.code,{children:"Rx<-"})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"I2C"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:"A4/SDA"}),", ",(0,s.jsx)(r.code,{children:"A5/SCL"})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Digital SPI"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:"~D10/SS"}),", ",(0,s.jsx)(r.code,{children:"~D11/MOSI"}),", ",(0,s.jsx)(r.code,{children:"D12/MISO"}),", ",(0,s.jsx)(r.code,{children:"D13/SCK"})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Interrupt"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:"D1/INT0"}),", ",(0,s.jsx)(r.code,{children:"D3/INT1"})]})]})]})]})]})]}),(0,s.jsxs)(o,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"ESP32"})})}),(0,s.jsxs)("div",{children:[(0,s.jsx)(r.p,{children:"An ESP32 development system (such as the NodeMCU-32S) is based on the ESP32 microcontroller, which features Wi-Fi and Bluetooth functionality. The development board operates at 3.3V and is powered through a 5V micro-USB connection or directly at 3.3V through the VIN pin. When using this development board, it is important to note that the GPIO pins are not 5V tolerant, and the maximum current they can supply is 12mA."}),(0,s.jsxs)(r.p,{children:["The following figure shows the pin diagram associated with the NodeMCU-32S WIFI MODULE development board (",(0,s.jsx)(r.a,{href:"https://docs.ai-thinker.com/_media/esp32/docs/nodemcu-32s_product_specification.pdf",children:"link"}),")"]}),(0,s.jsx)(t.A,{src:n(9207).A,alt:"uno-r3",className:"custom-img",caption:"This Photo by Unknown Author is licensed under CC BY-SA"}),(0,s.jsx)(r.p,{children:"As shown in the following figure, the NodeMCU-32S module has a total of 38 ports:"}),(0,s.jsx)(t.A,{src:n(5646).A,alt:"uno-r3",className:"custom-img",caption:"This Photo by Unknown Author is licensed under CC BY-SA"}),(0,s.jsx)(r.p,{children:"The following table summarizes the main function of some of these:"}),(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Pin notation (board)"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Digital (Only input)"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:"P34 [GPIO34]"}),", ",(0,s.jsx)(r.code,{children:"P35 [GPIO35]"}),", ",(0,s.jsx)(r.code,{children:"SVP [GPIO36]"}),", ",(0,s.jsx)(r.code,{children:"SVN [GPIO39]"})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Analog in"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:"SVP [GPIO36]"}),", ",(0,s.jsx)(r.code,{children:"SVN [GPIO39]"}),", ",(0,s.jsx)(r.code,{children:"P35 [GPIO 35]"}),", ",(0,s.jsx)(r.code,{children:"P34 [GPIO34]"}),", ",(0,s.jsx)(r.code,{children:"P32 [GPIO32]"}),", ",(0,s.jsx)(r.code,{children:"P33 [GPIO 33]"}),", ",(0,s.jsx)(r.code,{children:"P25 [GPIO25]"}),", ",(0,s.jsx)(r.code,{children:"P26 [GPIO26]"}),", ",(0,s.jsx)(r.code,{children:"P27 [GPIO27]"}),", ",(0,s.jsx)(r.code,{children:"P14 [GPIO14]"}),", ",(0,s.jsx)(r.code,{children:"P12 [GPIO12]"}),",  ",(0,s.jsx)(r.code,{children:"P13 [GPIO13]"}),", ",(0,s.jsx)(r.code,{children:"P15 [GPIO15]"}),", ",(0,s.jsx)(r.code,{children:"P2 [GPIO2]"}),", ",(0,s.jsx)(r.code,{children:"P0 [GPIO0]"}),", ",(0,s.jsx)(r.code,{children:"P4 [GPIO4]"})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"PWM"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:"SVP [GPIO36]"}),", ",(0,s.jsx)(r.code,{children:"SVN [GPIO39]"}),", ",(0,s.jsx)(r.code,{children:"P35 [GPIO 35]"}),", ",(0,s.jsx)(r.code,{children:"P34 [GPIO 34]"}),", ",(0,s.jsx)(r.code,{children:"P32 [GPIO 32]"}),", ",(0,s.jsx)(r.code,{children:"P33 [GPIO 33]"}),", ",(0,s.jsx)(r.code,{children:"P25 [GPIO25]"}),", ",(0,s.jsx)(r.code,{children:"P26 [GPIO26]"}),", ",(0,s.jsx)(r.code,{children:"P27 [GPIO27]"}),", ",(0,s.jsx)(r.code,{children:"P14 [GPIO14]"}),", ",(0,s.jsx)(r.code,{children:"P12 [GPIO12]"}),",  ",(0,s.jsx)(r.code,{children:"P13 [GPIO13]"}),", ",(0,s.jsx)(r.code,{children:"P15 [GPIO15]"}),", ",(0,s.jsx)(r.code,{children:"P2 [GPIO2]"}),", ",(0,s.jsx)(r.code,{children:"P0 [GPIO0]"}),", ",(0,s.jsx)(r.code,{children:"P4 [GPIO4]"})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Serial (UART)"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:"Tx [GPI1]"}),", ",(0,s.jsx)(r.code,{children:"Rx [GPI3]"}),", ",(0,s.jsx)(r.code,{children:"D8 [TXD2]"}),", ",(0,s.jsx)(r.code,{children:"D7 [RXD2]"})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"I2C"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:"P22 [GPI22/SCL]"}),", ",(0,s.jsx)(r.code,{children:"P21 [GPI21/SDA]"})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Digital SPI"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:"P23 [MOSI]"}),", ",(0,s.jsx)(r.code,{children:"P19 [MISO]"}),", ",(0,s.jsx)(r.code,{children:"P18 [SCK]"}),", ",(0,s.jsx)(r.code,{children:"P5 [SS]"})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Flash SPI"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:"CLK [GPIO6/FLASHCLK]"}),", ",(0,s.jsx)(r.code,{children:"SD0 [GPIO7/FLASHD0]"}),", ",(0,s.jsx)(r.code,{children:"SD1 [GPIO7/FLASHD1]"}),", ",(0,s.jsx)(r.code,{children:"CMD [GPIO7/FLASHCMD]"}),", ",(0,s.jsx)(r.code,{children:"SD2 [GPIO9/FLASHD2]"}),", ",(0,s.jsx)(r.code,{children:"SD3 [GPIO9/FLASHD3]"})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Capacitive touch"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:"P0 [GPIO4]/TOUCH1"}),", ",(0,s.jsx)(r.code,{children:" P4 [GPIO0]/TOUCH0"}),", ",(0,s.jsx)(r.code,{children:" P2 [GPIO2/TOUCH2]"}),", ",(0,s.jsx)(r.code,{children:" P15 [GPIO15/TOUCH3]"}),", ",(0,s.jsx)(r.code,{children:" P13 [GPIO13/TOUCH4]"}),", ",(0,s.jsx)(r.code,{children:" P12 [GPIO12/TOUCH5]"}),", ",(0,s.jsx)(r.code,{children:" P14 [GPIO14/TOUCH6]"}),", ",(0,s.jsx)(r.code,{children:" P27 [GPIO7/TOUCH7]"})]})]})]})]})]})]}),(0,s.jsxs)(o,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Arduino Nano 33 BLE Sense"})})}),(0,s.jsxs)("div",{children:[(0,s.jsxs)(r.p,{children:["En construcci\xf3n... ",(0,s.jsx)(r.a,{href:"https://docs.arduino.cc/resources/datasheets/ABX00031-datasheet.pdf",children:"datasheet"})]}),(0,s.jsx)(t.A,{src:n(5635).A,alt:"arduino_nano33-pin",className:"custom-img",caption:"This Photo by Unknown Author is licensed under CC BY-SA"}),(0,s.jsx)(r.p,{children:"The following table summarizes the main function of some of the pins of the Arduino Nano 33 BLE Sense board:"}),(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Pin notation (board)"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Digital/GPIO"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:"~D2"}),", ",(0,s.jsx)(r.code,{children:"~D3"}),", ",(0,s.jsx)(r.code,{children:"~D4"}),", ",(0,s.jsx)(r.code,{children:"~D5"}),", ",(0,s.jsx)(r.code,{children:"~D6"}),", ",(0,s.jsx)(r.code,{children:"~D7"}),", ",(0,s.jsx)(r.code,{children:"~D8"}),", ",(0,s.jsx)(r.code,{children:"~D9"}),", ",(0,s.jsx)(r.code,{children:"~D10"}),", ",(0,s.jsx)(r.code,{children:"~D11"}),", ",(0,s.jsx)(r.code,{children:"~D12"}),", ",(0,s.jsx)(r.code,{children:"~D13"})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Analog in"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:"A0"}),", ",(0,s.jsx)(r.code,{children:"A1"}),", ",(0,s.jsx)(r.code,{children:"A2"}),", ",(0,s.jsx)(r.code,{children:"A3"}),", ",(0,s.jsx)(r.code,{children:"A4"}),", ",(0,s.jsx)(r.code,{children:"A5"}),", ",(0,s.jsx)(r.code,{children:"A6"}),", ",(0,s.jsx)(r.code,{children:"A7"})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"PWM"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:"~D2"}),", ",(0,s.jsx)(r.code,{children:"~D3"}),", ",(0,s.jsx)(r.code,{children:"~D4"}),", ",(0,s.jsx)(r.code,{children:"~D5"}),", ",(0,s.jsx)(r.code,{children:"~D6"}),", ",(0,s.jsx)(r.code,{children:"~D7"}),", ",(0,s.jsx)(r.code,{children:"~D8"}),", ",(0,s.jsx)(r.code,{children:"~D9"}),", ",(0,s.jsx)(r.code,{children:"~D10"}),", ",(0,s.jsx)(r.code,{children:"~D11"}),", ",(0,s.jsx)(r.code,{children:"~D12"}),", ",(0,s.jsx)(r.code,{children:"~D13"})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Serial (UART)"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:"Tx"}),", ",(0,s.jsx)(r.code,{children:"Rx"})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"I2C"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:"A4/SDA"}),", ",(0,s.jsx)(r.code,{children:"A5/SCL"})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Digital SPI"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:"~D11/MOSI"}),", ",(0,s.jsx)(r.code,{children:"D12/MISO"})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Interrupt"}),(0,s.jsx)(r.td,{children:"All digital pins"})]})]})]})]})]})]})]}),(0,s.jsx)(r.h2,{id:"basic-prototyping-using-fritzing",children:"Basic prototyping using Fritzing"}),(0,s.jsxs)(r.p,{children:["Fritzing is a platform that allows you to prototype hardware on your computer and verify its functionality before assembling it physically. It can be downloaded from the following link ",(0,s.jsx)(r.a,{href:"https://fritzing.org/",children:"link"}),"."]}),(0,s.jsx)(r.p,{children:"To perform prototyping using elements (from different manufacturers) available in development kits, you can follow either of the two links shown below:"}),(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"How to Add Components in Fritzing"})," (",(0,s.jsx)(r.a,{href:"https://steemit.com/utopian-io/@thinkingmind/how-to-add-components-in-fritzing",children:"link"}),")"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Fritzing"})," (",(0,s.jsx)(r.a,{href:"https://chem.libretexts.org/Courses/University_of_Arkansas_Little_Rock/IOST_Library/07%3A_Electronics_Book/01%3A_Electric_Fundamentals/05%3A_Fritzing",children:"link"}),")"]}),"\n"]}),(0,s.jsx)(r.p,{children:"The following table shows links to some manufacturers that have libraries in Fritzing:"}),(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Manufacturer"}),(0,s.jsx)(r.th,{children:"Information"}),(0,s.jsx)(r.th,{children:"Repository"}),(0,s.jsx)(r.th,{children:"Link"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Adafruit"}),(0,s.jsx)(r.td,{children:(0,s.jsxs)("li",{children:[(0,s.jsx)(r.strong,{children:"Using the Adafruit Library with Fritzing"})," (",(0,s.jsx)(r.a,{href:"https://learn.adafruit.com/using-the-adafruit-library-with-fritzing",children:"link"}),")"]})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://github.com/adafruit/Fritzing-Library",children:"https://github.com/adafruit/Fritzing-Library"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://github.com/adafruit/Fritzing-Library/archive/master.zip",children:"download"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Sparkfun"}),(0,s.jsxs)(r.td,{children:[(0,s.jsxs)("li",{children:[(0,s.jsx)(r.strong,{children:"Make Your Own Fritzing Parts"})," (",(0,s.jsx)(r.a,{href:"https://learn.sparkfun.com/tutorials/make-your-own-fritzing-parts",children:"link"}),") "]})," ",(0,s.jsxs)("li",{children:[" ",(0,s.jsx)(r.strong,{children:"Fritzing!"})," (",(0,s.jsx)(r.a,{href:"https://www.sparkfun.com/news/663",children:"link"}),")"]})]}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://github.com/sparkfun/Fritzing_Parts",children:"https://github.com/sparkfun/Fritzing_Parts"})}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Seeed Studio"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://github.com/Seeed-Studio/fritzing_parts",children:"https://github.com/Seeed-Studio/fritzing_parts"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://github.com/Seeed-Studio/fritzing_parts/blob/master/seeed_fritzing_parts.fzbz",children:"seeed_fritzing_parts.fzbz"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Elegoo"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://github.com/marcinwisniowski/ElegooFritzingBin",children:"https://github.com/marcinwisniowski/ElegooFritzingBin"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://github.com/marcinwisniowski/ElegooFritzingBin/releases/download/0.6.3/Elegoo-0.6.3.fzbz",children:"Elegoo-0.6.3.fzbz"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"NodeMCU y otros componentes"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://github.com/AchimPieters/Fritzing-Custom-Parts",children:"https://github.com/AchimPieters/Fritzing-Custom-Parts"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://github.com/AchimPieters/Fritzing-Custom-Parts/releases/download/0.0.4/Fritzing.parts.rar"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"ESP32 NodeMCU"}),(0,s.jsx)(r.td,{children:(0,s.jsxs)("li",{children:[(0,s.jsx)(r.strong,{children:"ESP32S-HiLetgo Dev Boad with Pinout Template"})," (",(0,s.jsx)(r.a,{href:"https://forum.fritzing.org/t/esp32s-hiletgo-dev-boad-with-pinout-template/5357",children:"link"}),")"]})}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://forum.fritzing.org/uploads/default/original/2X/1/1c6c1b0e5bff03730a40b696b354783432fbb506.fzpz",children:"ESP32S_HiLetgo.fzpz"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Arduino Nano"}),(0,s.jsx)(r.td,{children:(0,s.jsxs)("li",{children:[(0,s.jsx)(r.strong,{children:"Arduino Nano 33 BLE Sense"})," (",(0,s.jsx)(r.a,{href:"https://store-usa.arduino.cc/products/arduino-nano-33-ble-sense",children:"link"}),")"]})}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://content.arduino.cc/assets/Arduino%20Nano%2033%20BLE%20Sense.fzpz",children:"Arduino Nano 33 BLE Sense.fzpz"})})]})]})]}),(0,s.jsx)(r.h2,{id:"references",children:"References"}),(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://randomnerdtutorials.com/",children:"https://randomnerdtutorials.com/"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://hci.rwth-aachen.de/arduino",children:"https://hci.rwth-aachen.de/arduino"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://cdn.sparkfun.com/assets/7/2/a/4/f/SerLCDReactionTimerActivity.pdf",children:"https://cdn.sparkfun.com/assets/7/2/a/4/f/SerLCDReactionTimerActivity.pdf"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://www.bildr.com/",children:"https://www.bildr.com/"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://www3.gobiernodecanarias.org/medusa/ecoescuela/recursosdigitales/2015/02/10/diseno-electronico-con-fritzing/",children:"https://www3.gobiernodecanarias.org/medusa/ecoescuela/recursosdigitales/2015/02/10/diseno-electronico-con-fritzing/"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://fritzing.org/media/uploads/learning/translations/Fritzing-PrimerosPasos.pdf",children:"https://fritzing.org/media/uploads/learning/translations/Fritzing-PrimerosPasos.pdf"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://fritzing.org/learning/",children:"https://fritzing.org/learning/"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://arxiv.org/ftp/arxiv/papers/2206/2206.07146.pdf",children:"https://arxiv.org/ftp/arxiv/papers/2206/2206.07146.pdf"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://chem.libretexts.org/Courses/University_of_Arkansas_Little_Rock/IOST_Library/07%3A_Electronics_Book",children:"https://chem.libretexts.org/Courses/University_of_Arkansas_Little_Rock/IOST_Library/07%3A_Electronics_Book"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://www.instructables.com/Fritzing-A-Tutorial/",children:"https://www.instructables.com/Fritzing-A-Tutorial/"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://forum.fritzing.org/t/fritzing-part-of-an-esp32/5355/5",children:"https://forum.fritzing.org/t/fritzing-part-of-an-esp32/5355/5"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://www.studiopieters.nl/homekit-accessoires/",children:"https://www.studiopieters.nl/homekit-accessoires/"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://en.wikipedia.org/wiki/Open-design_movement",children:"https://en.wikipedia.org/wiki/Open-design_movement"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://www.embedded.com/serial-protocols-compared/",children:"https://www.embedded.com/serial-protocols-compared/"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://circuitdigest.com/tutorial/serial-communication-protocols",children:"https://circuitdigest.com/tutorial/serial-communication-protocols"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://www.totalphase.com/blog/2017/08/serial-communication-protocols-the-basics/",children:"https://www.totalphase.com/blog/2017/08/serial-communication-protocols-the-basics/"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://www.linkedin.com/pulse/communication-protocols-embedded-system-keroloes-girgis",children:"https://www.linkedin.com/pulse/communication-protocols-embedded-system-keroloes-girgis"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://www.weare5vmedia.com/media/communication-protocols-for-an-embedded-engineer-to-know",children:"https://www.weare5vmedia.com/media/communication-protocols-for-an-embedded-engineer-to-know"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://embeddedsecurity.io/protocols",children:"https://embeddedsecurity.io/protocols"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://resources.altium.com/p/comparing-all-serial-communications-protocols",children:"https://resources.altium.com/p/comparing-all-serial-communications-protocols"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://wiki.seeedstudio.com/Name_your_website/",children:"https://wiki.seeedstudio.com/Name_your_website/"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://www.sparkfun.com/news/1529",children:"https://www.sparkfun.com/news/1529"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://learn.sparkfun.com/tutorials/using-github-to-share-with-sparkfun",children:"https://learn.sparkfun.com/tutorials/using-github-to-share-with-sparkfun"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://learn.sparkfun.com/tutorials/using-github",children:"https://learn.sparkfun.com/tutorials/using-github"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://makeabilitylab.github.io/physcomp/",children:"https://makeabilitylab.github.io/physcomp/"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://vimeo.com/channels/pcomp",children:"https://vimeo.com/channels/pcomp"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://web.stanford.edu/class/archive/engr/engr40m.1178/",children:"https://web.stanford.edu/class/archive/engr/engr40m.1178/"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://docs.arduino.cc/tutorials/nano-33-ble-sense/get-started-with-machine-learning",children:"https://docs.arduino.cc/tutorials/nano-33-ble-sense/get-started-with-machine-learning"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://dotnet.microsoft.com/en-us/learn/iot",children:"https://dotnet.microsoft.com/en-us/learn/iot"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://github.com/MicrosoftDocs/dotnet-iot-assets/tree/main",children:"https://github.com/MicrosoftDocs/dotnet-iot-assets/tree/main"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://github.com/noopkat/iotcore-smart-device",children:"https://github.com/noopkat/iotcore-smart-device"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://store-usa.arduino.cc/collections/internet-of-things",children:"https://store-usa.arduino.cc/collections/internet-of-things"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://www.wildernesslabs.co/",children:"https://www.wildernesslabs.co/"})}),"\n"]})]})]})}function x(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},9365:(e,r,n)=>{n.d(r,{A:()=>o});n(6540);var s=n(4164);const i={tabItem:"tabItem_Ymn6"};var t=n(4848);function o(e){let{children:r,hidden:n,className:o}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,s.A)(i.tabItem,o),hidden:n,children:r})}},1470:(e,r,n)=>{n.d(r,{A:()=>y});var s=n(6540),i=n(4164),t=n(3104),o=n(6347),c=n(205),d=n(7485),l=n(1682),h=n(679);function a(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function x(e){const{values:r,children:n}=e;return(0,s.useMemo)((()=>{const e=r??function(e){return a(e).map((e=>{let{props:{value:r,label:n,attributes:s,default:i}}=e;return{value:r,label:n,attributes:s,default:i}}))}(n);return function(e){const r=(0,l.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function j(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function u(e){let{queryString:r=!1,groupId:n}=e;const i=(0,o.W6)(),t=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,d.aZ)(t),(0,s.useCallback)((e=>{if(!t)return;const r=new URLSearchParams(i.location.search);r.set(t,e),i.replace({...i.location,search:r.toString()})}),[t,i])]}function p(e){const{defaultValue:r,queryString:n=!1,groupId:i}=e,t=x(e),[o,d]=(0,s.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!j({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:r,tabValues:t}))),[l,a]=u({queryString:n,groupId:i}),[p,m]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[i,t]=(0,h.Dv)(n);return[i,(0,s.useCallback)((e=>{n&&t.set(e)}),[n,t])]}({groupId:i}),f=(()=>{const e=l??p;return j({value:e,tabValues:t})?e:null})();(0,c.A)((()=>{f&&d(f)}),[f]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!j({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);d(e),a(e),m(e)}),[a,m,t]),tabValues:t}}var m=n(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(4848);function b(e){let{className:r,block:n,selectedValue:s,selectValue:o,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:l}=(0,t.a_)(),h=e=>{const r=e.currentTarget,n=d.indexOf(r),i=c[n].value;i!==s&&(l(r),o(i))},a=e=>{let r=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;r=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;r=d[n]??d[d.length-1];break}}r?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},r),children:c.map((e=>{let{value:r,label:n,attributes:t}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:s===r?0:-1,"aria-selected":s===r,ref:e=>d.push(e),onKeyDown:a,onClick:h,...t,className:(0,i.A)("tabs__item",f.tabItem,t?.className,{"tabs__item--active":s===r}),children:n??r},r)}))})}function w(e){let{lazy:r,children:n,selectedValue:i}=e;const t=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=t.find((e=>e.props.value===i));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:t.map(((e,r)=>(0,s.cloneElement)(e,{key:r,hidden:e.props.value!==i})))})}function P(e){const r=p(e);return(0,g.jsxs)("div",{className:(0,i.A)("tabs-container",f.tabList),children:[(0,g.jsx)(b,{...r,...e}),(0,g.jsx)(w,{...r,...e})]})}function y(e){const r=(0,m.A)();return(0,g.jsx)(P,{...e,children:a(e.children)},String(r))}},168:(e,r,n)=>{n.d(r,{A:()=>i});n(6540);var s=n(4848);const i=function(e){let{src:r,alt:n,caption:i,className:t}=e;return(0,s.jsxs)("div",{className:"custom-img-container",children:[(0,s.jsx)("img",{src:r,alt:n,className:`custom-img ${t}`}),i&&(0,s.jsx)("div",{className:"custom-caption",dangerouslySetInnerHTML:{__html:i}})]})}},5635:(e,r,n)=>{n.d(r,{A:()=>s});const s=n.p+"assets/images/arduino_nano33-pin-c6d114b3db3f228045b0f02e692e169a.png"},1847:(e,r,n)=>{n.d(r,{A:()=>s});const s=n.p+"assets/images/arduino_uno-pines-1246c20bf82cf9362a2c16ead9dadd2e.png"},9531:(e,r,n)=>{n.d(r,{A:()=>s});const s=n.p+"assets/images/interaccion_ambiente-ba32681c5cac7e10b7d3bb8b4f07815f.png"},9207:(e,r,n)=>{n.d(r,{A:()=>s});const s=n.p+"assets/images/nodemcu-esp_32s-pines-14eedef37b55f8eb8e047638cb359f1b.jpg"},5646:(e,r,n)=>{n.d(r,{A:()=>s});const s=n.p+"assets/images/nodemcu_32s_pines-d4220b510607ee71eb341ad4c0b36a35.png"},8453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>c});var s=n(6540);const i={},t=s.createContext(i);function o(e){const r=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);