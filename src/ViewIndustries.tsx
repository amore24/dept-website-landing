import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from "react-router-dom"
import { fetchIndustries } from './redux/slice/industriesSlice';
import { FadeInOnScroll } from './FadeInOnScroll';

export default function ViewIndustries() {
    const [layout, setLayout] = useState('Grid');
    const formRef = useRef<HTMLFormElement>(null);
    const dispatch = useDispatch<any>();
    const state:any = useSelector<any>((state) => state);
    const [searchParams] = useSearchParams();
        
    useEffect(() => {
        const query = searchParams.get("industries"); 
        if(query) { 
            dispatch(fetchIndustries(`industryType=${query}`));
        } else {
            dispatch(fetchIndustries());
        }
    }, [dispatch,searchParams]);

    if (state?.isLoading) return <p>Loading industries...</p>;
    if (state?.isError) return <p>Error: {state.isError}</p>;

    return(
        <section className='py-[65px] px-[36px] lg:py-[65px] lg:px-[58px]'>
            <form ref={formRef}>
                <select name="industries" id="industries" onChange={() => {if(formRef?.current) formRef?.current.submit()}}>
                    <option value="">Select Industry Type</option>
                    <option value="Media">Media</option>
                    <option value="AI">AI</option>
                    <option value="Health">Health</option>
                    <option value="Commerce">Commerce</option>
                </select>
                <button onClick={() => setLayout('Grid')}><i className={`${layout == 'Grid'? 'text-black' : 'text-gray-500'} fa fa-th fa-2 m-[10px]`}></i></button>
                <button onClick={() => setLayout('List')}><i className={`${layout == 'List'? 'text-black' : 'text-gray-500'} fa fa-list fa-2 m-[10px]`}></i></button>
            </form>
            
            <section className={`${ layout == 'Grid' ? 'grid grid-cols-2 gap-10':'flex flex-col'}`}>
                {state.data.map((industry:any) => (

                    <div className={`${ layout == 'Grid' ? 'relative':'relative flex-[100%] m-[10px]'}`} key={industry.label}>
                        <FadeInOnScroll>
                        <div className='absolute top-[0] left-[0] text-center w-full h-[inherit]'>
                            <div className="lg:text-[26px] text-[12px] text-white">{industry.hoverText}</div>
                        </div>
                        </FadeInOnScroll>
                        <img src={industry.imageUrl} alt={industry.label} />
                    </div>
                ))}
            </section>
        </section>
    );
}