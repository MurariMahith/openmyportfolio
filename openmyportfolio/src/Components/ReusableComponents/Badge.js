import React from 'react';

function Badge({msg}) {

    const badges = {
        goodToHave : "Optional, But preferred",
        optional : "Optional",
        impactful : "Impactful"
    }

  return (
    <span class="badge badge-info">{badges[msg] !== undefined && badges[msg] !== null ? badges[msg] : msg}</span>
  );
}

export default Badge;
