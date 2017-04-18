import React from 'react';
import {Menu} from '../menu/menu'
import {Footer} from '../footer/footer'
import {Skin} from '../skin/skin'

const skins = [
    {
        name: 'Bayonet-Tigertooth',
        img: "https://steamimages.opskins.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-KmcjgOrzUhFRe-sR_jez--YXygED6_0o4ZjildoDBdVA_ZguC-gO9yeq90Je4vZuYwHdguSgm5H7am0TkhAYMMLKzxtQfiA/256fx256f",
        price: 300
    },
    {
        name: 'StatTrak™ Glock-18 | Water Elemental',
        img: "https://steamimages.opskins.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0Ob3djFN79f7mImagvLnML7fglRd4cJ5nqeQoN3w0QHgrhdoMjylJo7GIVU7ZAzQqQC6k-rs1JHotZvNzSRgvHFx-z-DyPzurK-U/256fx256f",
        price: 19.95
    }
]

export const Home = () => (
    <div>
        <Menu></Menu>
        <div className="skins">
            {skins.map((skin, key) => {
                return <Skin name={skin.name}
                             img={skin.img}
                             price={skin.price}
                             key={key}/>
            })}
        </div>
        <Footer></Footer>
    </div>
)