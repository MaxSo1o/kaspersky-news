import s from "@/app/NewsBlock.module.css";

export const FormatAuthor = (fullname: object) => {

    const formattingAuthor = (name: string)=> {
        if (!name) return (console.log('Нет данных'))
        const [firstName, lastName] = name.split(" ")
        if (!lastName) return firstName
        const shortLastName = `${lastName.charAt(0)}.`

        return `${firstName} ${shortLastName}`
    }

    return (
        <>
            <span className={s['text']}>{formattingAuthor(fullname[0])}</span>
        </>
    )

}
