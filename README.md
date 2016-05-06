# PrefectNumber pn.js
## What is PrefectNumber(pn.js)?   pn.js 是个啥子东西？  

The pn.js is a javascript frame,that make sure the readability of number.  
pn.js 是一个保证各种数字易读性的JS框架。  


If you compose a phone number as "13655558888" np.js can auto format to "135 6666 8888", so easy! And it is not damaging the source number, if you copy it, that will keep the original content.  
如果您撰写一个电话号码，如"13655558888" np.js 可以自动格式为 "135 6666 8888"，是不是很简单 ！它不会破坏原来的号码内容，如果您要复制它，那将会保持原始内容。  



## What formats are supported by number?    支持哪些格式的数字？

- 中国大陆的手机号：130、131、132、133、134、135、136、137、138、139、150、151、152、153、154、155、156、157、158、159、180、181、182、183、184、185、186、187、188、189、170、176、177、178、147、145；  
- 中国大陆座机号(含 400、800 电话，兼容区号和分机号)；  
- 身份证号码；
- 邮政编码；
- 数字三位分节；
- 人民币；
- 美元；

## How to use it?   这东西，咋个用？  

手机号、座机号、400电话、800电话：  
代码：` <pn-phone-zh-cn>13566668888</pn-phone-zh-cn> `  
效果：135 6666 8888

身份证号码：  
代码：` <pn-identification>510722195808290011</pn-identification> `  
效果：510 722 1958 0829 0011  

人民币：  
代码：` <pn-rmb>22365.45</pn-rmb> `  
效果：￥ 22,365.45  


美元：  
代码：` <pn-dollar>16546.56</pn-dollar> `  
效果：$ 16,546.56  

数量：  
代码：` <pn-math>3129481</pn-math> `  
效果：3,129,481  

邮编：  
代码：` <pn-zip>621101</pn-zip> `  
效果：62 11 01  

默认：  
代码：` <pn>549866574321646216546</pn> `  
效果：5498 6657 4321 6462 1654 6  

## 需要注意的问题！
NP.js just for number display on the Web page, without affecting the original content, the number default as a string for format. Scenes involving the operation has strict compute and accuracy shall not apply.  

np.js 只针对数字在 web 页面中的数字显示效果，在不影响原内容的情况下增强可读性，默认将数字作为字符串进行处理。不适用涉及运算对精度有严格要求的场景。





