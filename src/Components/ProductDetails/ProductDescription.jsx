
import React, { useContext, useState, useEffect } from "react";
import { ProductContext } from "../../Context/ProductContext";
import "../../Styles/productDetails.scss";
import "../../Styles/common.scss";
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaListUl,
  FaListOl
} from "react-icons/fa";
import {
  MdInsertLink,
  MdImage,
  MdFormatQuote,
  MdFormatClear,
} from "react-icons/md";

import {
  MdFormatAlignLeft,
  MdFormatAlignCenter,
  MdFormatAlignRight,
  MdFormatAlignJustify
} from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoCodeSlash } from "react-icons/io5";
import { useParams } from "react-router-dom";


function ProductDescription() {
    const [isDropdownShow, setIsDropdownShow] = useState(false);
    const [description, setIsDescription] = useState("")

    const [selectedOption, setSelectedOption] = useState("Normal");
    const {id} = useParams()
    const {posterImg, setIsDirty} = useContext(ProductContext)
   
    const selectedItem = posterImg.find((item)=>item.productId === Number(id))


  const toolbarIcons = [
  FaBold,
  FaItalic,
  FaUnderline,
  IoCodeSlash,
];

const toolbarIcons1 = [
  MdFormatAlignLeft,
  MdFormatAlignCenter,
  MdFormatAlignRight,
  MdFormatAlignJustify,
]
const toolbarIcons2 = [
  FaListUl,
  FaListOl,
]
const toolbarIcons3 = [MdInsertLink, MdImage, MdFormatQuote, MdFormatClear]

const dropdownData = ["Normal", "Heading1", "Heading2", "Heading3","Heading4", "Heading4", "Heading5", "Heading6"]


    function handleSelect(item) {
        setSelectedOption(item);
        setIsDropdownShow(false);
     }

   useEffect(()=>{
     if(selectedItem?.alt){
        setIsDescription(selectedItem.alt)
     }
   },[selectedItem])


  return (
    <div className="product-overview">

      <div className="description-header">
        <label>Description *</label>

        <div className="toolbar-section flex">
           <div className="dropdown-wrapper">
                         <div className="dropdown-label" onClick={() => setIsDropdownShow((prev) => !prev)}>
                         {selectedOption}
                         <span><IoMdArrowDropdown /></span>
                           </div>

                    {isDropdownShow && (
                   <ul className="dropdown-menu">
                      {dropdownData.map((item) => (
                          <li key={item}
                       onClick={() => handleSelect(item)}>
                        {item}
                        </li>
                          ))}
                         </ul>
                          )}</div>
           
         <div className="toolbar">
              {toolbarIcons.map((Icon, index) => (
                <button key={index}>
                   <Icon />
                </button>
              ))}
        </div>
             <div className="toolbar">
              {toolbarIcons1.map((Icon, index) => (
                <button key={index}>
                   <Icon />
                </button>
              ))}
        </div>
         <div className="toolbar">
              {toolbarIcons2.map((Icon, index) => (
                <button key={index}>
                   <Icon />
                </button>
              ))}
        </div>
     </div>
      <div className="toolbar-second-row">
        {
        toolbarIcons3?.map((Icon, index)=>(
            <button key={index}><Icon size={24}/></button>
        ))
      }
      </div>
      </div>
   
      <textarea
        className="description-textarea"
        value={description}
        onChange={(e)=>{
          setIsDescription(e.target.value)
          setIsDirty(true);
        }}
      />

    </div>
  );
}

export default ProductDescription