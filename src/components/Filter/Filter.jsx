import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearFilterProducts, fetchCategoryList, fetchCategoryProducts, removeFilterProducts, setCheckedState } from '../../redux/category/categorySlice'
import close from '../../imgs/close.png'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import './Filter.scss'
import { useViewport } from '../../utils/useViewport';

function Filter() {
    const dispatch = useDispatch()
    const { categoryList, checkedState } = useSelector((state) => state.category)
    const [filterTerm, setFilterTerm] = useState('')
    const [checkedPos, setCheckedPos] = useState(0)
    const winWidth = useViewport();
    const [isFilterOpen, setIsfilterOPen] = useState(false)

    useEffect(() => {
        dispatch(fetchCategoryList())
    }, [])

    useEffect(() => {
        dispatch(setCheckedState(new Array(categoryList.length).fill(false)))
    }, [categoryList])

    useEffect(() => {
        if (checkedState[checkedPos]) {
            dispatch(fetchCategoryProducts(filterTerm))
        }
        else {
            dispatch(removeFilterProducts(filterTerm))
        }
    }, [checkedState])

    const handleOnChange = (position, e) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        )
        console.log(updatedCheckedState);
        dispatch(setCheckedState(updatedCheckedState))
        setCheckedPos(position)
        setFilterTerm(e.target.value)
    }
    
    const clearFilter = () => {
        dispatch(setCheckedState(checkedState.map((item, index) =>
            item = false
        )))
        dispatch(clearFilterProducts())
    }


    return (
        <>
            {
                winWidth < 991 ? (
                    <>
                        <div className="category_mobile_btn">
                            <button onClick={() => setIsfilterOPen(true)}>
                                <span>Categories</span>
                                <FilterAltIcon htmlColor='#0C3C9D' fontSize='inherit' />
                            </button>
                        </div>
                        {
                            isFilterOpen && (
                                <div className="filter">
                                    <div className="filter_inner">
                                        <div className="filter_content">
                                            <div className="filter_head">
                                                <h2>Categories</h2>
                                                <button
                                                    onClick={() => {
                                                        clearFilter()
                                                        setIsfilterOPen(false)
                                                    }}
                                                >
                                                    <span>Clear</span>
                                                    <img src={close} alt="clear" />
                                                </button>
                                            </div>
                                            <div className="filter_wrap">
                                                {
                                                    categoryList.map((category, index) => (
                                                        <div className="check_group" key={index}>
                                                            <label htmlFor={`category${index}`}>{category}</label>
                                                            <input
                                                                type="checkbox"
                                                                checked={checkedState.length && checkedState[index]}
                                                                name="category"
                                                                id={`category${index}`}
                                                                value={category}
                                                                onChange={(e) => handleOnChange(index, e)}
                                                            />
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                            <div className="do_filter_btn" >
                                                <button onClick={()=>setIsfilterOPen(false)}>
                                                    <span>Filter Now</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </>
                ) : (
                    <div className="filter">
                        <div className="filter_inner">
                            <div className="filter_content">
                                <div className="filter_head">
                                    <h2>Categories</h2>
                                    <button
                                        onClick={() => clearFilter()}
                                    >
                                        <span>Clear</span>
                                        <img src={close} alt="clear" />
                                    </button>
                                </div>
                                <div className="filter_wrap">
                                    {
                                        categoryList.map((category, index) => (
                                            <div className="check_group" key={index}>
                                                <label htmlFor={`category${index}`}>{category}</label>
                                                <input
                                                    type="checkbox"
                                                    checked={checkedState.length && checkedState[index]}
                                                    name="category"
                                                    id={`category${index}`}
                                                    value={category}
                                                    onChange={(e) => handleOnChange(index, e)}
                                                />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

        </>
    )
}

export default Filter