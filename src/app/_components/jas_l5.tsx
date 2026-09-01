'use client'

interface ComponentProps {
title?: string
}

export default function Component({ title = 'Component' }: ComponentProps) {
return (
<div className="p-4">
<h1 className="text-2xl font-bold">{title}</h1>
</div>
)
}
