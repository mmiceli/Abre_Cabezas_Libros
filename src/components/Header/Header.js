import './Header.scss';
import {Brand} from './Brand/Brand';
import {List} from './Nav/Nav';
import {Search} from './Search/Search';
import {Cart} from './Cart/Cart';

export const Header = () => {
    return (
        <header>
            <section className="navbar container">
                <Brand/>
                <div className="navbar__centro">
                    <Search/>
                    <List/>
                </div>
                <Cart/>
            </section>
        </header>
    )
}