import homeSel from "../selectors/home.sel"

let button_text = 'ACEPTAR Y CONTINUAR';


class LoginEnter {
    

    click_on_aceptar_continuar_button() {
        cy.get(homeSel.ACEPTAR_CONTINUAR_BUTTON_ELEM).click()
            
        cy.on("window:confirm", (t) => {
            expect(t).to.equal(button_text)
        })
    }

    click_on_area_client_button() {
        cy.get(homeSel.AREA_CLIENT_BUTTON_ELEM)
            .click({force: true})
    }

}

export default LoginEnter