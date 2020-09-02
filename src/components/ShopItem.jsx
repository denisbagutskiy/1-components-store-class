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
        const { item } = this.props;

        return <div className="shop-item">
            <h2>{item.brand}</h2>
            <h1>{item.title}</h1>
            <div className="description">
                <h3>{item.description}</h3>
                <p>{item.descriptionFull}</p>
            </div>
            <div className="divider"></div>
            <div className="shop-item__cart">
                <CurrencyFormat value={item.price} displayType={'text'} thousandSeparator={true} prefix={item.currency} decimalScale={2} fixedDecimalScale={true} renderText={value => <div className="price">{value}</div>} />
                <button>Добавить в корзину</button>
            </div>
        </div>
    };
} 

ShopItem.propTypes = PropTypes.instanceOf(ShopItemModel);