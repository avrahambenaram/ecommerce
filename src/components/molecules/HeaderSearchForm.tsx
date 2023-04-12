import Router from 'next/router';
import { useState, FormEvent } from 'react';
import { FiSearch } from 'react-icons/fi';

export function HeaderSearchForm() {

    const [searchText, setSearchText] = useState('');

    function submit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        Router.push({
            pathname: 'search',
            query: {
                q: searchText,
            }
        })
    }

    return (
        <form
            className='w-1/4'
            action='/search'
            method='GET'
            role='search'
            onSubmit={submit}
        >
            <label
                className='flex flex-row items-center gap-2 bg-white px-2 py-1 rounded'
            >
                <FiSearch
                    size={18}
                    color='#000'
                />
                <input
                    className='outline-none bg-transparent'
                    name='q'
                    placeholder='Pesquise aqui'
                    value={searchText}
                    onChange={e => setSearchText(e.target.value)}
                />
            </label>
        </form>
    )
}