import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchIndustries } from './redux/slice/industriesSlice';

export default function ViewIndustries() {
    const dispatch = useDispatch<any>();
    const state:any = useSelector<any>((state) => state);
    
    useEffect(() => {
        dispatch(fetchIndustries());
        console.log("state", state);
    }, [dispatch])

    if (state?.isLoading) return <p>Loading industries...</p>;
    if (state?.isError) return <p>Error: {state.isError}</p>;

    return(
        <section>
            <select name="industries" id="industries">
                <option value="Customer Experience">Customer Experience</option>
                <option value="AI Transformation">AI Transformation</option>
                <option value="Health">Health</option>
                <option value="Commerce">Commerce</option>
            </select>
            <ul>
                {state.data.map((industry:any) => (
                    <li key={industry.label}>{industry.hoverText}</li>
                ))}
            </ul>
        </section>
    );
}