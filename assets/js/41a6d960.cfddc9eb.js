(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[984],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(n),d=i,k=c["".concat(p,".").concat(d)]||c[d]||u[d]||r;return n?a.createElement(k,l(l({ref:t},m),{},{components:n})):a.createElement(k,l({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9435:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var a=n(7294),i="surveyLinkBox_YpLv";function r(e){var t="https://docs.google.com/forms/d/e/1FAIpQLScsB21xJWM_VANad5GcVkQqKB_BptS77axbunzs7ZkwoE5JUw/viewform?usp=pp_url&entry.1880917601="+e.docTitle.replace(/\s/g,"+");return a.createElement("a",{href:t,target:"_blank"},a.createElement("div",{className:i},"Share what we can improve!"))}},744:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return s},toc:function(){return m},default:function(){return c}});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),l=n(9435),o=["components"],p={id:"model-spec",sidebar_position:5},s={unversionedId:"tutorials/model-spec",id:"tutorials/model-spec",isDocsHomePage:!1,title:"Model Specification",description:"Model specification specifies the structure of model input and output, allowing the use of prebuilt transformations.",source:"@site/docs/tutorials/model-spec.mdx",sourceDirName:"tutorials",slug:"/tutorials/model-spec",permalink:"/docs/tutorials/model-spec",editUrl:"https://github.com/pytorch/live/edit/main/website/docs/tutorials/model-spec.mdx",version:"current",sidebarPosition:5,frontMatter:{id:"model-spec",sidebar_position:5}},m=[{value:"Pack, Input preprocessing",id:"pack-input-preprocessing",children:[{value:"Types",id:"types",children:[]},{value:"Type <code>ImageTransform</code>:",id:"type-imagetransform",children:[]}]},{value:"Unpack, Output post processing.",id:"unpack-output-post-processing",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Give us feedback",id:"give-us-feedback",children:[]}],u={toc:m};function c(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"tutorial-page"},(0,r.kt)("p",null,"Model specification specifies the structure of model input and output, allowing the use of prebuilt transformations."),(0,r.kt)("p",null,"It is stored as ",(0,r.kt)("a",{parentName:"p",href:"https://pytorch.org/docs/stable/generated/torch.jit.load.html#torch.jit.load"},"extra_file of the model")," 'model/live.spec.json'."),(0,r.kt)("p",null,"Example of model with specification preparation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"title=make_model.py",title:"make_model.py"},'from pathlib import Path\n\nimport torch\nimport torchvision\nfrom torch.utils.mobile_optimizer import optimize_for_mobile\n\nmodel = torchvision.models.mobilenet_v3_small(pretrained=True)\nmodel.eval()\nscript_model = torch.jit.script(model)\nscript_model_opt = optimize_for_mobile(script_model)\nspec = Path("live.spec.json").read_text()\nextra_files = {}\nextra_files["model/live.spec.json"] = spec\nscript_model_opt._save_for_lite_interpreter("model_with_spec.ptl", _extra_files=extra_files)\n')),(0,r.kt)("p",null,"'model/live.spec.json' is a valid JSON file.\nWhich contains ",(0,r.kt)("inlineCode",{parentName:"p"},"pack")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"unpack")," objects and may contain other root objects that will be used by both pack (input preprocessing) and unpack (model output post processing) functionality."),(0,r.kt)("p",null,"The JavaScript side calls the model to forward specifying a plain javascript object that contains ",(0,r.kt)("inlineCode",{parentName:"p"},"$key")," members of predefined types (Image, double, integer, string)."),(0,r.kt)("p",null,"'model/live.spec.json' contains ",(0,r.kt)("inlineCode",{parentName:"p"},'"$key"')," stubs that will be replaced with the values from the specified javascript object."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=model/live.spec.json",title:"model/live.spec.json"},'{\n "pack": {\n   "type": "tuple",\n   "items": [\n     {\n       "type": "tensor_from_image",\n       "image": "image",\n       "transforms": [\n         {\n           "type": "image_to_image",\n           "name": "center_crop",\n           "width": "$cropWidth",\n           "height": "$cropHeight"\n         },\n         {\n           "type": "image_to_image",\n           "name": "scale",\n           "width": "$scaleWidth",\n           "height": "$scaleHeight"\n         },\n         {\n           "type": "image_to_tensor",\n           "name": "rgb_norm",\n           "mean": [0.0, 0.0, 0.0],\n           "std": [1.0, 1.0, 1.0]\n         }\n       ]\n     },\n     {\n       "type": "tensor",\n       "dtype": "float",\n       "sizes": [1, 3],\n       "items": [\n         "$scaleWidth",\n         "$scaleHeight",\n         "$scale"\n       ]\n     },\n     {\n       "type": "tensor",\n       "dtype": "float",\n       "sizes": [\n         1\n       ],\n       "items": [\n         "$should_run_track"\n       ]\n     },\n     {\n       "type": "tensor",\n       "dtype": "float",\n       "sizes": ["$rois_n", 4],\n       "items": "$rois"\n     }\n   ]\n },\n "unpack": {\n   "type": "tensor",\n   "dtype": "float",\n   "key": "scores"\n }\n}\n')),(0,r.kt)("p",null,"Respective JavaScript for this spec:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const {\n  result: {scores: scores},\n  inferenceTime: time,\n} = await MobileModel.execute(modelInfo.model, {\n  image: image,\n  cropWidth: 448,\n  cropHeight: 448,\n  scaleWidth: 224,\n  scaleHeight: 224,\n  scale: 1.0,\n  rois_n: 3,\n  rois: [0, 0, 20, 20, 10, 10, 50, 50, 30, 30, 60, 60],\n  should_run_track: 0.0\n});\n")),(0,r.kt)("h2",{id:"pack-input-preprocessing"},"Pack, Input preprocessing"),(0,r.kt)("p",null,"Specified by ",(0,r.kt)("inlineCode",{parentName:"p"},"pack")," object. Which represents the structure of the model input (which is torchscript (python) object that may contain PyTorch Tensors and plain python types (scalars, arrays, lists). Every object in ",(0,r.kt)("inlineCode",{parentName:"p"},"pack")," has a ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," field, other fields are specific to that ",(0,r.kt)("inlineCode",{parentName:"p"},"type"),"."),(0,r.kt)("h3",{id:"types"},"Types"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tuple"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"items"),": array of the tuple items"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"scalar_bool"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"value"),": true or false"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"scalar_long"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"value"),": long value"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"scalar_double"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"value"),": double value"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tensor"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dtype"),': data type of the tensor "float" or "long"'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"items"),": array of tensor data of specified dtype"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tensor_from_image"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"image"),": js image object"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"transforms"),": array of chained transformations on the input image, the type ",(0,r.kt)("inlineCode",{parentName:"li"},"ImageTransform"),":"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tensor_from_string"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tokenizer"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bert"),":\nPrepares tensor dtype=long of token ids using bert vocabulary from  ",(0,r.kt)("inlineCode",{parentName:"li"},".vocabulary_bert")," of spec json."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"gpt2"),":\nPrepares tensor dtype=long of token ids using bert vocabulary from  ",(0,r.kt)("inlineCode",{parentName:"li"},".vocabulary_gpt2")," of spec json.")))))),(0,r.kt)("h3",{id:"type-imagetransform"},"Type ",(0,r.kt)("inlineCode",{parentName:"h3"},"ImageTransform"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'type: "image_to_image" or "image_to_tensor"'),(0,r.kt)("li",{parentName:"ul"},"name: the name of transformation"),(0,r.kt)("li",{parentName:"ul"},"additional parameters specific to the particular type and name")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"image_to_image")," type:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"center_crop"),"\nCrops from the center part of the image with specified width and height.\nparameters:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"width"),": width of the result cropped image"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"height"),": width of the result cropped image"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"scale"),"\nScales input image to specified width and height.\nparameters:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"width"),": width of the result scaled image"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"height"),": height of the result scaled image")))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"image_to_tensor")," type:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"name: ",(0,r.kt)("inlineCode",{parentName:"li"},"rgb_norm"),"\nThe output is NCHW tensor from input image, normalized by specified mean and std.\nparameters:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mean"),": array of 3 float numbers with values of mean for normalization"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"std"),": array of 3 float numbers with values of std for normalization")))),(0,r.kt)("h2",{id:"unpack-output-post-processing"},"Unpack, Output post processing."),(0,r.kt)("p",null,"The result of post processing is a plain javascript object (will call it output_jsmap further)."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"unpack")," object is the recursive structure of objects of predefined ",(0,r.kt)("inlineCode",{parentName:"p"},"type"),"s."),(0,r.kt)("p",null,"unpack type:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tuple"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"items"),": tuple items to unpack"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"list"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"items"),": list items to unpack"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dict_string_key"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"items"),": tuple items to unpack"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tensor"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"key"),": key of the array of specified data type that contains tensor items in NCHW format."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dtype"),': data of the tensor "float" or "long"'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"scalar_long"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"key"),": key of the long value in output_jsmap"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"scalar_float"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"key"),": key of the double value in output_jsmap"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"scalar_bool"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"key"),": key of the bool value in output_jsmap"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"string"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"key"),": key of the string in output_jsmap"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tensor_to_string"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"key"),": key of the result string in output_jsmap"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"decoder"),":\n",(0,r.kt)("inlineCode",{parentName:"li"},"gpt2"),":\nExpects tensor of long data type containing tokenIds. Decodes tokenIds using vocabulary in ",(0,r.kt)("inlineCode",{parentName:"li"},".vocabulary_gpt2")," in the spec."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bert_decode_qa_answer"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"key"),": key of the result string in output_jsmap")))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},".vocabulary_gpt2")," expected json object containing ",(0,r.kt)("inlineCode",{parentName:"p"},'\\"key\\"=id')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},".vocabulary_bert")," expected string containing bert tokens separated with ",(0,r.kt)("inlineCode",{parentName:"p"},"\\n")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=bert_qa.json",title:"bert_qa.json"},'{\n  "vocabulary_bert": "[PAD]\\n[unused0]\\n[unused1]\\n[unused2]\\n[unused3]\\n[unused4]\\n[unused5]\\n...",\n  "pack": {\n    "type": "tensor_from_string",\n    "tokenizer": "bert",\n    "string": "$string",\n    "model_input_length": "$model_input_length"\n  },\n  "unpack": {\n    "type": "bert_decode_qa_answer",\n    "key": "bert_answer"\n  }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=gpt2.json",title:"gpt2.json"},'{\n  "vocabulary_gpt2": { "!": 0, "\\"": 1, "#": 2, "$": 3, "%": 4, "&": 5, ... ,"<|endoftext|>": 50256},\n  "pack": {\n    "type": "tensor_from_string",\n    "tokenizer": "gpt2",\n    "string": "$string"\n  },\n  "unpack": {\n    "type": "tensor_to_string",\n    "decoder": "gpt2",\n    "key": "text"\n  }\n}\n')),(0,r.kt)("h2",{id:"give-us-feedback"},"Give us feedback"),(0,r.kt)(l.Z,{docTitle:"Model Specification",mdxType:"SurveyLinkButton"})))}c.isMDXComponent=!0}}]);