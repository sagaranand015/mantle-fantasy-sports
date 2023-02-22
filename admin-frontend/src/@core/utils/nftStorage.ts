import { NFTStorage } from 'nft.storage';
import { NFT_STORAGE_KEY } from './constants';

export function GetStorageClient() {
    const client = new NFTStorage({ token: NFT_STORAGE_KEY });
    return client;
}

export function MakeIpfsLink(cid: string) {
    if (cid.startsWith('ipfs')) {
        cid = cid.replace('ipfs://', 'https://nftstorage.link/ipfs/')
        return cid;
    } else {
        const url = `https://nftstorage.link/ipfs/${cid}`;
        return url;
    }
}

export async function FetchDataFromIpfsLink(cid: string) {
    var finalUrl = MakeIpfsLink(cid);
    if (finalUrl) {
        const resp = await fetch(finalUrl);
        return await resp.json();
    }
    return "";
}

export async function UploadNftJson(name: string, description: string, release: string, director: string, image: string, metadata: string) {
    const client = GetStorageClient();
    const data = {
        "name": name,
        "description": description,
        "image": image,
        "release": release,
        "director": director,
        "metadata": metadata,
    }
    const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
    return await client.storeBlob(blob);
}

export async function GetLeagueDataIpfsLink(league_data: any) {
    const client = GetStorageClient();
    const blob = new Blob([JSON.stringify(league_data)], { type: 'application/json' });
    console.log("======== storing leagues data", blob)
    return await client.storeBlob(blob);
}

export async function GetSquadDataIpfsLink(squad_data: any) {
    const client = GetStorageClient();
    const blob = new Blob([JSON.stringify(squad_data)], { type: 'application/json' });
    console.log("======== storing squads data", blob)
    return await client.storeBlob(blob);
}