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
                    <Link href="/1">
                        <div>1</div>
                    </Link>
                </li>
                <li>
                    <Link href="/3">
                        <div>3</div>
                    </Link>
                </li>
                <li>
                    <Link href="/other">
                        <div>Other</div>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
