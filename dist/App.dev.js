"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=App;var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _regenerator=_interopRequireDefault(require("@babel/runtime/regenerator"));var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _expoStatusBar=require("expo-status-bar");var _react=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _asyncStorage=_interopRequireDefault(require("@react-native-async-storage/async-storage"));var Animatable=_interopRequireWildcard(require("react-native-animatable"));var _jsxFileName="/Users/robertbalonek/code/work/interviews/native-jobs/avybe-proj/App.js";function App(){var _useState=(0,_react.useState)(styles.buttonUnPressed),_useState2=(0,_slicedToArray2["default"])(_useState,2),buttonStyleName=_useState2[0],setButtonStyleName=_useState2[1];var _useState3=(0,_react.useState)(styles.buttonUnPressed),_useState4=(0,_slicedToArray2["default"])(_useState3,2),buttonStyleImg=_useState4[0],setButtonStyleImg=_useState4[1];var _useState5=(0,_react.useState)(),_useState6=(0,_slicedToArray2["default"])(_useState5,2),inputNameValue=_useState6[0],setInputNameValue=_useState6[1];var _useState7=(0,_react.useState)(),_useState8=(0,_slicedToArray2["default"])(_useState7,2),inputImgValue=_useState8[0],setInputImgValue=_useState8[1];var _useState9=(0,_react.useState)(""),_useState10=(0,_slicedToArray2["default"])(_useState9,2),inputName=_useState10[0],setInputName=_useState10[1];var _useState11=(0,_react.useState)(""),_useState12=(0,_slicedToArray2["default"])(_useState11,2),inputImg=_useState12[0],setInputImg=_useState12[1];var _useState13=(0,_react.useState)("Please Import Name"),_useState14=(0,_slicedToArray2["default"])(_useState13,2),name=_useState14[0],setName=_useState14[1];var _useState15=(0,_react.useState)("https://res.cloudinary.com/bobalobbadingdong/image/upload/v1615681700/robertbalonek.com/Headshots/your-img-here_ppmrbm.jpg"),_useState16=(0,_slicedToArray2["default"])(_useState15,2),img=_useState16[0],setImg=_useState16[1];var _useState17=(0,_react.useState)("flipInY"),_useState18=(0,_slicedToArray2["default"])(_useState17,2),animationName=_useState18[0],resetAnimationName=_useState18[1];var _useState19=(0,_react.useState)("flipInY"),_useState20=(0,_slicedToArray2["default"])(_useState19,2),animationImg=_useState20[0],resetAnimationImg=_useState20[1];var storeName=function storeName(value){return _regenerator["default"].async(function storeName$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;_context.next=3;return _regenerator["default"].awrap(_asyncStorage["default"].setItem("@store_name",value));case 3:_context.next=7;break;case 5:_context.prev=5;_context.t0=_context["catch"](0);case 7:case"end":return _context.stop();}}},null,null,[[0,5]]);};var storeImg=function storeImg(value){return _regenerator["default"].async(function storeImg$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.prev=0;_context2.next=3;return _regenerator["default"].awrap(_asyncStorage["default"].setItem("@store_img",value));case 3:_context2.next=7;break;case 5:_context2.prev=5;_context2.t0=_context2["catch"](0);case 7:case"end":return _context2.stop();}}},null,null,[[0,5]]);};var getName=function getName(){var value;return _regenerator["default"].async(function getName$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:_context3.prev=0;_context3.next=3;return _regenerator["default"].awrap(_asyncStorage["default"].getItem("@store_name"));case 3:value=_context3.sent;if(value!==null){setName(value);}_context3.next=10;break;case 7:_context3.prev=7;_context3.t0=_context3["catch"](0);console.log(_context3.t0);case 10:case"end":return _context3.stop();}}},null,null,[[0,7]]);};getName();var getImg=function getImg(){var value;return _regenerator["default"].async(function getImg$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:_context4.prev=0;_context4.next=3;return _regenerator["default"].awrap(_asyncStorage["default"].getItem("@store_img"));case 3:value=_context4.sent;if(value!==null){setImg(value);}_context4.next=9;break;case 7:_context4.prev=7;_context4.t0=_context4["catch"](0);case 9:case"end":return _context4.stop();}}},null,null,[[0,7]]);};getImg();var btnClickName=function btnClickName(){setName(inputName);storeName(inputName);setInputNameValue("");setButtonStyleName(styles.buttonPressed);resetAnimationName("flipInX");};var btnUnclickName=function btnUnclickName(){setButtonStyleName(styles.buttonUnPressed);setInputNameValue();};var btnClickImg=function btnClickImg(){setImg(inputImg);storeImg(inputImg);setInputImgValue("");setButtonStyleImg(styles.buttonPressed);resetAnimationImg();};var btnUnclickImg=function btnUnclickImg(){setButtonStyleImg(styles.buttonUnPressed);setInputImgValue("flipInX");};return _react["default"].createElement(_reactNative.View,{style:styles.container,__self:this,__source:{fileName:_jsxFileName,lineNumber:90,columnNumber:5}},_react["default"].createElement(_reactNative.View,{style:styles.welcome,__self:this,__source:{fileName:_jsxFileName,lineNumber:91,columnNumber:7}},_react["default"].createElement(_reactNative.Text,{style:styles.welcomeText,__self:this,__source:{fileName:_jsxFileName,lineNumber:92,columnNumber:9}},"Welcome,"),_react["default"].createElement(_reactNative.View,{__self:this,__source:{fileName:_jsxFileName,lineNumber:93,columnNumber:9}},_react["default"].createElement(Animatable.Text,{animation:animationName,style:styles.name,__self:this,__source:{fileName:_jsxFileName,lineNumber:94,columnNumber:11}},name)),_react["default"].createElement(Animatable.View,{animation:animationImg,__self:this,__source:{fileName:_jsxFileName,lineNumber:98,columnNumber:9}},_react["default"].createElement(_reactNative.Image,{style:styles.image,source:{uri:"".concat(img)},__self:this,__source:{fileName:_jsxFileName,lineNumber:99,columnNumber:11}}))),_react["default"].createElement(_reactNative.View,{style:styles.inputs,__self:this,__source:{fileName:_jsxFileName,lineNumber:107,columnNumber:7}},_react["default"].createElement(_reactNative.TextInput,{value:inputNameValue,placeholder:"Input name HERE",style:(0,_defineProperty2["default"])({height:40,borderColor:"gray",borderWidth:1,width:200,textAlign:"center"},"borderColor","green"),onChangeText:function onChangeText(text){return setInputName(text);},__self:this,__source:{fileName:_jsxFileName,lineNumber:108,columnNumber:9}}),_react["default"].createElement(_reactNative.TextInput,{value:inputImgValue,placeholder:"Input Image URL HERE",style:(0,_defineProperty2["default"])({height:40,borderColor:"gray",borderWidth:1,width:200,textAlign:"center"},"borderColor","green"),onChangeText:function onChangeText(text){return setInputImg(text);},__self:this,__source:{fileName:_jsxFileName,lineNumber:122,columnNumber:9}})),_react["default"].createElement(Animatable.View,{style:styles.inputs,animation:"zoomInUp",duration:2000,__self:this,__source:{fileName:_jsxFileName,lineNumber:136,columnNumber:7}},_react["default"].createElement(_reactNative.Pressable,{style:buttonStyleName,title:"Change Name",onPressIn:btnClickName,onPressOut:btnUnclickName,__self:this,__source:{fileName:_jsxFileName,lineNumber:141,columnNumber:9}},_react["default"].createElement(_reactNative.Text,{style:styles.buttonText,__self:this,__source:{fileName:_jsxFileName,lineNumber:147,columnNumber:11}},"Change Name")),_react["default"].createElement(_reactNative.Pressable,{style:buttonStyleImg,title:"Change Image",onPressIn:btnClickImg,onPressOut:btnUnclickImg,__self:this,__source:{fileName:_jsxFileName,lineNumber:149,columnNumber:9}},_react["default"].createElement(_reactNative.Text,{style:styles.buttonText,__self:this,__source:{fileName:_jsxFileName,lineNumber:155,columnNumber:11}},"Change Image"))),_react["default"].createElement(_expoStatusBar.StatusBar,{style:"auto",__self:this,__source:{fileName:_jsxFileName,lineNumber:158,columnNumber:7}}));}var styles=_reactNative.StyleSheet.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"},welcome:{position:"absolute",top:100},welcomeText:{fontSize:40},name:{fontSize:40,color:"red",textAlign:"center"},image:{height:150,width:150,borderRadius:5,alignSelf:"center"},inputs:{display:"flex",flexDirection:"row",width:"100%",justifyContent:"space-around",position:"relative",bottom:-100},buttonUnPressed:{height:145,width:150,backgroundColor:"#f6f6f6",position:"relative",top:14,borderRadius:25,shadowColor:"#000",shadowOffset:{width:10,height:27},textAlign:"center",justifyContent:"center",shadowOpacity:0.41,shadowRadius:9.11,elevation:10},buttonPressed:{height:140,width:140,backgroundColor:"#f6f6f6",position:"relative",top:14,borderRadius:25,shadowColor:"green",shadowOffset:{width:0,height:7},shadowOpacity:0.41,shadowRadius:9.11,elevation:70,textAlign:"center",justifyContent:"center"},buttonText:{display:"flex",textAlign:"center",fontSize:20,color:"blue"}});