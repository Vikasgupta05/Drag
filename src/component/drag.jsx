import React , {useState} from "react";
// import RLDD from "react-list-drag-and-drop/lib/RLDD";
import { useDrag } from 'react-dnd'
import { useDrop } from 'react-dnd';
import { PetCard } from './PetCard';

export const  Drag = ( ) =>  {

    // const [{ inputArr }, dragRef] = useDrag({
    //     type: 'pet',
    //     item: 1  ,
    //     collect: (monitor) => ({
    //         inputArr: monitor.isDragging()
    //     })
    // })

    const inputArr = [
      {
        type: "text",
        id: 1,
        value: ""
      }
    ];

    const inputArrblue = [
        {
          type: "text",
          id: 1,
          value: ""
        }
    ];

    const inputArrgreen = [
    {
        type: "text",
        id: 1,
        value: ""
    }
    ];
      
    const inputArrblack = [
        {
            type: "text",
            id: 1,
            value: ""
        }
        ];
    
  
    const [arr, setArr] = useState(inputArr);
    const [arrblue, setArrblue] = useState(inputArrblue);
    const [arrgreen, setArrgreen] = useState(inputArrgreen);
    const [arrblack, setArrblack] = useState(inputArrblack);



  
    const addInput = () => {
      setArr(s => {
        return [
          ...s,
          {
            type: "text",
            value: ""
          }
        ];
      });
    };

    const addInputblue = () => {
        setArrblue(s => {
            return [
            ...s,
            {
                type: "text",
                value: ""
            }
            ];
        });
    };

    const addInputgreen = () => {
        setArrgreen(s => {
            return [
            ...s,
            {
                type: "text",
                value: ""
            }
            ];
        });
    };

    
    const addInputblack = () => {
        setArrblack(s => {
            return [
            ...s,
            {
                type: "text",
                value: ""
            }
            ];
        });
    };


  
    const handleChange = e => {
      e.preventDefault();
      const index = e.target.id;
      setArr(s => {
        const newArr = s.slice();
        newArr[index].value = e.target.value;
  
        return newArr;
      });
    };

    const handleChangeblue = e => {
        e.preventDefault();
        const index = e.target.id;
        setArrblue(s => {
          const newArr = s.slice();
          newArr[index].value = e.target.value;
    
          return newArr;
        });
    };
  

    const handleChangegreen = e => {
        e.preventDefault();
        const index = e.target.id;
        setArrgreen(s => {
          const newArr = s.slice();
          newArr[index].value = e.target.value;
    
          return newArr;
        });
    };

    
    const handleChangeblack = e => {
        e.preventDefault();
        const index = e.target.id;
        setArrblack(s => {
          const newArr = s.slice();
          newArr[index].value = e.target.value;
    
          return newArr;
        });
    };
    return (

        <>
            <div>
                <button onClick={addInput}>+</button>
                {arr.map((item, i) => {
                return (
                    <input
                    onChange={handleChange}
                    value={item.value}
                    style={{height:"80px" , width : "60px" , background : "red" ,  marginLeft : "30px"}}
                    id={i}
                    type={item.type}
                    size="30"
                    />
                );
                })}
            </div>

            <br />


            <div>
                <button onClick={addInputblue}>+</button>
                {arrblue.map((item, i) => {
                    return (
                        <input
                        onChange={handleChangeblue}
                        value={item.value}
                        style={{height:"80px" , width : "60px" , background : "blue" , marginLeft : "30px"}}

                        id={i}
                        type={item.type}
                        size="30"
                        />
                    );
                    })}
            </div>


         
                    <br />



            <div>
                <button onClick={addInputgreen}>+</button>
                {arrgreen.map((item, i) => {
                    return (
                        <input
                        onChange={handleChangegreen}
                        value={item.value}
                        style={{height:"80px" , width : "60px" , background : "green" , marginLeft : "30px"}}

                        id={i}
                        type={item.type}
                        size="30"
                        />
                    );
                    })}
            </div>

                    <br />
            <div>
                <button onClick={addInputblack}>+</button>
                {arrblack.map((item, i) => {
                    return (
                        <input
                        onChange={handleChangeblack}
                        value={item.value}
                        style={{height:"80px" , width : "60px" , background : "black" , marginLeft : "30px"}}

                        id={i}
                        type={item.type}
                        size="30"
                        />
                    );
                    })}
            </div>
        </>
    );
  }