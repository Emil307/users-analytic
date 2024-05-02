import axios from 'axios';
import { IUser } from '@/shared';

const API = import.meta.env.VITE_API_URL;

interface IData {
    results: IUser[];
    info: {
        page: number;
        results: number;
        seed: string; 
        version: string;
    }
}

export const getUsers = async () => {
    const res = await axios<IData>({
        url: `${API}/?results=500`,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Headers": "*"
        },
    })
    
    return res
} 
