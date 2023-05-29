import React from 'react'
import { getHomeData } from '../../helpers/api/services/Movies';
import { LoaderFunctionArgs } from 'react-router-dom';

type HomeProps = {
}

const Home : React.FC<HomeProps> = () => {

    return(
        <div>

        </div>
    )
}

Home.displayName = 'Home'

export const fetchHomeData = async ({ request }:LoaderFunctionArgs) => {
    const page = parseInt((await request.formData()).get('page')?.toString() || '1')
    const lang = (await request.formData()).get('lang')?.toString() || 'en'
    let data = await getHomeData(page, lang==='fr'?'fr-FR':'en-US');
    return data;
}

export default Home
