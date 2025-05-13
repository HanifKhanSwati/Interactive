import { Markmap } from 'markmap-view';
import { useEffect, useRef, useState } from 'react';

function MarkmapComponent() {
    const svgRef = useRef(null);
    const [markdown, setMarkdown] = useState("# Hello\n## Markmap!");

    useEffect(() => {
        if (svgRef.current) {
            const mm = Markmap.create(svgRef.current);
            mm.setData(markdown);
        }
    }, [markdown]);

    return (
        <div>
            <textarea onChange={(e) => setMarkdown(e.target.value)} />
            <svg ref={svgRef}></svg>
        </div>
    );
}

export default MarkmapComponent;