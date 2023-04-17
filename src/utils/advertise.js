import React from 'react';

function AdvertiseBlock() {
    const isProduction = process.env.NODE_ENV === 'production';

    return (
        <div>
            {isProduction && (
                <div>
                    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7121848006198705"
                        crossorigin="anonymous"></script>
                    {/* right side */}
                    <ins class="adsbygoogle"
                        style={{display:'block'}}
                        data-ad-client="ca-pub-7121848006198705"
                        data-ad-slot="7015843565"
                        data-ad-format="auto"
                        data-full-width-responsive="true"></ins>
                    <script>
                        (adsbygoogle = window.adsbygoogle || []).push({ });
                    </script>
                </div>
            )}
        </div>

    )
}

export default AdvertiseBlock;