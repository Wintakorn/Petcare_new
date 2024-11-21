import { ImageSourcePropType } from "react-native";
interface Pet {
    id: number;
    name: string;
    image: ImageSourcePropType;
    gender: string;
    age: number;
    breed: string;
    history: string;
    days: number;
    month: string;
    year: number;
}
interface RootStackParamList {
    HomeScreen: undefined;
    PetDetail: { pet: Pet };
}

export const pets: Pet[] = [
    {
        id: 1,
        name: 'Corgi',
        image: { uri: 'https://embed.pixiv.net/artwork.php?illust_id=109539128&mdate=1688300662' },
        gender: 'Male',
        age: 5,
        breed: 'Corgi',
        history: 'รวมรวมส่งเสริมการส่งออกการตลาดการจัดเงินการบัญชีอนุมัติเข้าใจนักลงทุนเขียนวางแผนตราสารหนี้คู่ค้าโฆษณาพนักงานการเจรจาตลาดเป้าหมายนำเข้าลูกค้าเสียภาษีการบริหารความรู้พันธบัตร',
        days: 13,
        month: 'มกกราคม',
        year: 2023,
    },
    {
        id: 2,
        name: 'Siamese Cat',
        image: { uri: 'https://preview.redd.it/hifumi-by-msh-blue-archive-v0-znlcb2b7wxf81.jpg?width=1080&crop=smart&auto=webp&s=8791e0cdf0d4d05200d05e8e62c64535a2b5163a' },
        gender: 'Female',
        age: 3,
        breed: 'Siamese',
        history: 'รวมรวมส่งเสริมการส่งออกการตลาดการจัดเงินการบัญชีอนุมัติเข้าใจนักลงทุนเขียนวางแผนตราสารหนี้คู่ค้าโฆษณาพนักงานการเจรจาตลาดเป้าหมายนำเข้าลูกค้าเสียภาษีการบริหารความรู้พันธบัตร',
        days: 13,
        month: 'มกกราคม',
        year: 2023,
    },
    {
        id: 3,
        name: 'Siamese Cat',
        image: { uri: 'https://embed.pixiv.net/artwork.php?illust_id=117254397&mdate=1711380304' },
        gender: 'Female',
        age: 3,
        breed: 'Siamese',
        history: 'รวมรวมส่งเสริมการส่งออกการตลาดการจัดเงินการบัญชีอนุมัติเข้าใจนักลงทุนเขียนวางแผนตราสารหนี้คู่ค้าโฆษณาพนักงานการเจรจาตลาดเป้าหมายนำเข้าลูกค้าเสียภาษีการบริหารความรู้พันธบัตร',
        days: 13,
        month: 'มกกราคม',
        year: 2023,
    },
    {
        id: 4,
        name: 'Siamese Cat',
        image: { uri: 'https://embed.pixiv.net/artwork.php?illust_id=108525987&mdate=1685342617' },
        gender: 'Female',
        age: 3,
        breed: 'Siamese',
        history: 'รวมรวมส่งเสริมการส่งออกการตลาดการจัดเงินการบัญชีอนุมัติเข้าใจนักลงทุนเขียนวางแผนตราสารหนี้คู่ค้าโฆษณาพนักงานการเจรจาตลาดเป้าหมายนำเข้าลูกค้าเสียภาษีการบริหารความรู้พันธบัตร',
        days: 13 ,
        month: 'มกกราคม ',
        year:  2023,
    },
];