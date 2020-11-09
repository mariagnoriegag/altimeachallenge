import React, { FC } from "react";
import Link from "next/link";

const Nav: FC = () => {
    return (
        <nav>
            <h4>samples</h4>
            <ul>
                <li>
                    <Link href="/">
                        <div>Home</div>
                    </Link>
                </li>
                <li>
                    <Link href="/SSR">
                        <div>SSR</div>
                    </Link>
                </li>
                <li>
                    <Link href="/StyledJsx">
                        <div>Styled Jsx</div>
                    </Link>
                </li>
                <li>
                    <Link href="/ModuleCss">
                        <div>Module CSS</div>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
