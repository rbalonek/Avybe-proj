"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=App;var _regenerator=_interopRequireDefault(require("@babel/runtime/regenerator"));var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _expoStatusBar=require("expo-status-bar");var _react=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _asyncStorage=_interopRequireDefault(require("@react-native-async-storage/async-storage"));var _jsxFileName="/Users/robertbalonek/code/work/interviews/native-jobs/avybe-proj/App.js";function App(){var _useState=(0,_react.useState)(),_useState2=(0,_slicedToArray2["default"])(_useState,2),inputNameValue=_useState2[0],setInputNameValue=_useState2[1];var _useState3=(0,_react.useState)(),_useState4=(0,_slicedToArray2["default"])(_useState3,2),inputImgValue=_useState4[0],setInputImgValue=_useState4[1];var _useState5=(0,_react.useState)(""),_useState6=(0,_slicedToArray2["default"])(_useState5,2),inputName=_useState6[0],setInputName=_useState6[1];var _useState7=(0,_react.useState)(""),_useState8=(0,_slicedToArray2["default"])(_useState7,2),inputImg=_useState8[0],setInputImg=_useState8[1];var _useState9=(0,_react.useState)("Please Import Name"),_useState10=(0,_slicedToArray2["default"])(_useState9,2),name=_useState10[0],setName=_useState10[1];var _useState11=(0,_react.useState)("https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601145853/robertbalonek.com/Headshots/IMG_9570_aoed89.jpg"),_useState12=(0,_slicedToArray2["default"])(_useState11,2),img=_useState12[0],setImg=_useState12[1];var storeName=function storeName(value){return _regenerator["default"].async(function storeName$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;_context.next=3;return _regenerator["default"].awrap(_asyncStorage["default"].setItem("@store_name",value));case 3:_context.next=7;break;case 5:_context.prev=5;_context.t0=_context["catch"](0);case 7:case"end":return _context.stop();}}},null,null,[[0,5]]);};var storeImg=function storeImg(value){return _regenerator["default"].async(function storeImg$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.prev=0;_context2.next=3;return _regenerator["default"].awrap(_asyncStorage["default"].setItem("@store_img",value));case 3:_context2.next=7;break;case 5:_context2.prev=5;_context2.t0=_context2["catch"](0);case 7:case"end":return _context2.stop();}}},null,null,[[0,5]]);};var getName=function getName(){var value;return _regenerator["default"].async(function getName$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:_context3.prev=0;_context3.next=3;return _regenerator["default"].awrap(_asyncStorage["default"].getItem("@store_name"));case 3:value=_context3.sent;if(value!==null){setName(value);}_context3.next=9;break;case 7:_context3.prev=7;_context3.t0=_context3["catch"](0);case 9:case"end":return _context3.stop();}}},null,null,[[0,7]]);};getName();var getImg=function getImg(){var value;return _regenerator["default"].async(function getImg$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:_context4.prev=0;_context4.next=3;return _regenerator["default"].awrap(_asyncStorage["default"].getItem("@store_img"));case 3:value=_context4.sent;if(value!==null){setImg(value);}_context4.next=9;break;case 7:_context4.prev=7;_context4.t0=_context4["catch"](0);case 9:case"end":return _context4.stop();}}},null,null,[[0,7]]);};getImg();var btnClickName=function btnClickName(){setName(inputName);storeName(inputName);setInputNameValue("");};var btnClickImg=function btnClickImg(){setImg(inputImg);storeImg(inputImg);setInputImgValue("");};return _react["default"].createElement(_reactNative.View,{style:styles.container,__self:this,__source:{fileName:_jsxFileName,lineNumber:69,columnNumber:5}},_react["default"].createElement(_reactNative.View,{style:styles.welcome,__self:this,__source:{fileName:_jsxFileName,lineNumber:70,columnNumber:7}},_react["default"].createElement(_reactNative.Text,{style:styles.welcomeText,__self:this,__source:{fileName:_jsxFileName,lineNumber:71,columnNumber:9}},"Welcome"),_react["default"].createElement(_reactNative.Text,{style:styles.name,__self:this,__source:{fileName:_jsxFileName,lineNumber:72,columnNumber:9}},name),_react["default"].createElement(_reactNative.Image,{style:styles.image,source:{uri:"".concat(img)},__self:this,__source:{fileName:_jsxFileName,lineNumber:73,columnNumber:9}})),_react["default"].createElement(_reactNative.View,{style:styles.inputs,__self:this,__source:{fileName:_jsxFileName,lineNumber:80,columnNumber:7}},_react["default"].createElement(_reactNative.TextInput,{value:inputNameValue,placeholder:"Change name HERE",style:{height:40,borderColor:"gray",borderWidth:1,width:200,textAlign:"center"},onChangeText:function onChangeText(text){return setInputName(text);},__self:this,__source:{fileName:_jsxFileName,lineNumber:81,columnNumber:9}}),_react["default"].createElement(_reactNative.TextInput,{value:inputImgValue,placeholder:"Change Image URL HERE",style:{height:40,borderColor:"gray",borderWidth:1,width:200,textAlign:"center"},onChangeText:function onChangeText(text){return setInputImg(text);},__self:this,__source:{fileName:_jsxFileName,lineNumber:94,columnNumber:9}})),_react["default"].createElement(_reactNative.View,{style:styles.inputs,__self:this,__source:{fileName:_jsxFileName,lineNumber:107,columnNumber:7}},_react["default"].createElement(_reactNative.Pressable,{style:styles.buttons,title:"Change Name",onPressIn:btnClickName,__self:this,__source:{fileName:_jsxFileName,lineNumber:108,columnNumber:9}}),_react["default"].createElement(_reactNative.Pressable,{style:styles.buttons,title:"Change Image",onPressIn:btnClickImg,__self:this,__source:{fileName:_jsxFileName,lineNumber:113,columnNumber:9}})),_react["default"].createElement(_expoStatusBar.StatusBar,{style:"auto",__self:this,__source:{fileName:_jsxFileName,lineNumber:119,columnNumber:7}}));}var styles=_reactNative.StyleSheet.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"},welcome:{position:"absolute",top:100},welcomeText:{fontSize:40},name:{fontSize:40,color:"red",textAlign:"center"},image:{height:150,width:150,borderRadius:5,alignSelf:"center"},inputs:{display:"flex",flexDirection:"row",width:"100%",justifyContent:"space-around",position:"relative",bottom:-100},buttons:{height:145,width:150,backgroundColor:"#f6f6f6",position:"relative",top:14,borderRadius:25,shadowColor:"#000",shadowOffset:{width:10,height:27},textAlign:"center",justifyContent:"center",shadowOpacity:0.41,shadowRadius:9.11,elevation:10}});