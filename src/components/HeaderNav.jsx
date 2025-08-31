"use client"
import React, { useState } from 'react'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link'

const HeaderNav = ({ children }) => {
    const [open, setOpen] = useState(false)

    const handleClose = () => setOpen(false)

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger>{children}</SheetTrigger>
            <SheetContent className="bg-white w-[250px]">
                <div className="flex flex-col gap-8 items-center mt-10">
                    <Link href="/about-us" onClick={handleClose}>About Us</Link>
                    <Link href="/who-we-are" onClick={handleClose}>Who We Are</Link>
                    <Link href="/what-we-do" onClick={handleClose}>What We Do</Link>
                    <Link href="/" onClick={handleClose}>For Investors</Link>
                    <Link
                        className="bg-[#6224A9] text-white px-4 py-2 rounded-lg"
                        href="/contact"
                        onClick={handleClose}
                    >
                        Contact
                    </Link>
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default HeaderNav
