import React from 'react';
import PropTypes from 'prop-types';
import CurrencyFormat from 'react-currency-format';
import './shop-item.css';
import { ShopItemModel } from '../models/ShopItemModel';

export class ShopItem extends React.Component {

    static propTypes = {
        item: PropTypes.instanceOf(ShopItemModel)
    }

    render() {
        const { brand, title, description, descriptionFull, price, currency } = this.props.item;

        return <div className="shop-item">
            <h2>{brand}</h2>
            <h1>{title}</h1>
            <div className="description">
                <h3>{description}</h3>
                <p>{descriptionFull}</p>
            </div>
            <div className="divider"></div>
            <div className="shop-item__cart">
                <CurrencyFormat value={price} displayType={'text'} thousandSeparator={true} prefix={currency} decimalScale={2} fixedDecimalScale={true} renderText={value => <div className="price">{value}</div>} />
                <button>Добавить в корзину</button>
            </div>
        </div>
    };
} 