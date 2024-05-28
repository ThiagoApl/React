import Button from "./Exemplo1";

export default function ContactList({
    selectedContact,
    Contacts,
    onSelect
}) {
    return (
        <section className="contact-list">
            <ul>
                {Contacts.map(contact =>
                    <li key={contact.email}>
                        <Button onClick={() => {
                            onSelect(contact);
                        }}>
                            {contact.name}
                        </Button>
                    </li>
                )}
            </ul>
        </section>
    );
}