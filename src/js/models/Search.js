import axios from 'axios';
import { key, proxy } from '../config';

export default class Search {
    constructor(query) {
        this.query = query;
    }
    async getResult() {
        try {
            /* const proxy = 'https://cors-anywhere.herokuapp.com/';
            const key = 'eb6fa5007cbf1b5e1bb2d4a9b835a27d'; */
            const res = await axios(`${proxy}https://food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
            //console.log(this.result);
        } catch (error) {
            alert(error);
        }
    }

}


//app key - eb6fa5007cbf1b5e1bb2d4a9b835a27d 
//https://api.edamam.com/search
//https://food2fork.com/api/search