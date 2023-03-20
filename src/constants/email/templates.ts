interface DateProps {
  dd: string;
  mm: string;
  yyyy: string | number;
}

export const CONTACT_CLIENT_TEMPLATE = (
  name: string,
  email: string,
  date: DateProps,
  message: string
) => `
    <div style="width: 100%; heigth: 100%; background-color:#2a2467; color: #fff; border-radius: 14px;"></div>
        <div style="display:inline-block; text-align: justify; ; color:#fff; heigth:60px; width:100%; padding:0 24px; ">
            <h2 style="font-weigth: 600">GOL <span style="font-weigth: 200"> Mídia</span> </h2>
            <p> ${date.dd}/${date.mm}/${date.yyyy} </p>
        </div>
        <div style="padding: 24px 36px; border-top: 1px solid #fff; color: #fff; ">
            <h1 style="color: #fffff;">Nós já recebemos seu email</h1>
            <div style="margin-top: 18px; color: #fff">
                <h2>Confira o seus dados:</h2>
                <div style="display: flex; margin-top:12px; font-size: 18px">
                    <h4 style="margin:0;" >Nome: </h4>
                    <p style="margin:0; margin-left: 8px;"> ${name} </p>
                </div>
                <div style="display: flex; margin-top:12px; font-size: 18px">
                    <h4 style="margin:0;">Email: </h4>
                    <p style="margin:0; margin-left: 8px;"><a style="color: #fff;"> ${email} </a> </p>
                </div>
                <div style="display: flex; margin-top:12px; font-size: 18px">
                    <h4 style="margin:0;">Mensagem: </h4>
                    <p style="margin:0; margin-left: 8px;"> ${message} </p>
                </div>
            </div>
        </div>
    
        <div style="padding: 24px 24px;color: #fff;">
            <h4 style="color: #fff;">Caso algo esteja errado você pode enviar outra mensagem <a href="golmidia.com.br/contact" style="color: #fff; text-decoration: underline; "> clicando aqui </a> </h4>
        </div>
    </div>
  `;

export const CONTACT_ADMIN_TEMPLATE = (
  name: string,
  email: string,
  date: DateProps,
  message: string
) => `
    <div style=" width: 100%; heigth: 100%; background-color:#2a2467; color: #fff; border-radius: 14px;">
        <div style="display:inline-block; text-align: justify; color:#fff; heigth:60px; width:100%; padding:0 24px; ">
            <h2 style="font-weigth: 600">GOL <span style="font-weigth: 200"> Mídia</span> </h2>
            <p> ${date.dd}/${date.mm}/${date.yyyy} </p>
        </div>
        <div style="padding: 24px 36px;  color: #fff; border-top: 1px solid #fff;">
            <h1 style="color: #fff;">Dados do cliente:</h1>
            <div style="margin-bottom: 18px;">
                <div style="display: flex; margin-top:12px; font-size: 18px">
                    <h4 style="margin:0;" >Nome: </h4>
                    <p style="margin:0; margin-left: 8px;"> ${name} </p>
                </div>
                <div style="display: flex; margin-top:12px; font-size: 18px">
                    <h4 style="margin:0;">Email: </h4>
                    <p style="margin:0; margin-left: 8px;"> <a style="color: #fff;"> ${email} </a> </p>
                </div>
                <div style="display: flex; margin-top:12px; font-size: 18px">
                    <h4 style="margin:0;">Mensagem: </h4>
                    <p style="margin:0; margin-left: 8px;"> ${message} </p>
                </div>
            </div>
        </div>
    </div>
  `;
