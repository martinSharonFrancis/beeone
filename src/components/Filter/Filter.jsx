import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearFilterProducts, fetchCategoryList, fetchCategoryProducts, removeFilterProducts, setCheckedState } from '../../redux/category/categorySlice'
import close from '../../imgs/close.png'
import './Filter.scss'

function Filter() {
    const dispatch = useDispatch()
    const { categoryList, checkedState } = useSelector((state) => state.category)
    const [filterTerm, setFilterTerm] = useState('');
    // const [checkedState, setCheckedState] = useState([])
    // const checkedState = useSelector()
    const [checkedPos, setCheckedPos] = useState(0)

    useEffect(() => {
        dispatch(fetchCategoryList())
    }, [])

    useEffect(() => {
        // setCheckedState(new Array(categoryList.length).fill(false))
        dispatch(setCheckedState(new Array(categoryList.length).fill(false)))
    }, [categoryList])

    useEffect(() => {
        // console.log(checkedState, checkedPos, filterTerm);
        if (checkedState[checkedPos]) {
            dispatch(fetchCategoryProducts(filterTerm))
        }
        else {
            dispatch(removeFilterProducts(filterTerm))
        }
    }, [checkedState])


    const handleOnChange = (position, e) => {
        // console.log(checkedState);
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        )

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
        <div className="filter">
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
    )
}

export default Filter