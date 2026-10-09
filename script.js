const track = document.getElementById('carrosselTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

prevBtn.addEventListener('click', () => {
  const cardWidth = track.querySelector('.card-projeto').offsetWidth + 20;
  track.scrollBy({ left: -cardWidth, behavior: 'smooth' });
});

nextBtn.addEventListener('click', () => {
  const cardWidth = track.querySelector('.card-projeto').offsetWidth + 20;
  track.scrollBy({ left: cardWidth, behavior: 'smooth' });
});

const themeToggleBtn = document.getElementById('btn-theme-toggle');

themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});

function mascara_telefone ()
        {
            var tel_formatado = document.getElementById("tel").value
            if (tel_formatado[0]!="+")
                {
                    if (tel_formatado[0]!=undefined)
                    {
                        document.getElementById("tel").value=tel_formatado.slice(0,0)+"+"+tel_formatado[0];
                    }
                }
            if (tel_formatado[3]!=" ")
                {
                    if (tel_formatado[3]!=undefined)
                    {
                        document.getElementById("tel").value=tel_formatado.slice(0,3)+" "+tel_formatado[3];
                    }
                }
            if (tel_formatado[4]!="(")
                {
                    if (tel_formatado[4]!=undefined)
                    {
                        document.getElementById("tel").value=tel_formatado.slice(0,4)+"("+tel_formatado[4];
                    }
                }
            if (tel_formatado[7]!=")")
                {
                    if (tel_formatado[7]!=undefined)
                    {
                        document.getElementById("tel").value=tel_formatado.slice(0,7)+")"+tel_formatado[7];
                    }
                }
            if (tel_formatado[8]!=" ")
                {
                    if (tel_formatado[8]!=undefined)
                    {
                        document.getElementById("tel").value=tel_formatado.slice(0,8)+" "+tel_formatado[8];
                    }
                }
            if (tel_formatado[10]!=" ")
                {
                    if (tel_formatado[10]!=undefined)
                    {
                         document.getElementById("tel").value=tel_formatado.slice(0,10)+" "+tel_formatado[10];
                    }
                }
            if (tel_formatado[15]!="-")
                {
                    if (tel_formatado[15]!=undefined)
                    {
                         document.getElementById("tel").value=tel_formatado.slice(0,15)+"-"+tel_formatado[15];
                    }
                }
        }
