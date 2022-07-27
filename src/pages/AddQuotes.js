import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";

const AddQuotes = ()=>{

    const history=useHistory();

    const {sendRequest,status}= useHttp(addQuote)

    useEffect(() => {
        if(status==='success'){
            history.push('/quotes')
        }
    }, [status,history]);

    const AddQuoteHandler= quoteData=>{
       sendRequest(quoteData)

    }

    return (
        <QuoteForm isLoading={status==='pending'} onAddQuote={AddQuoteHandler}></QuoteForm>
    )
}

export default AddQuotes;