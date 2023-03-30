export default function BlogDate(data) {
      const date = new Date(data.d)
      const formattedDate = date.toLocaleDateString("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric"
    })
    return formattedDate.replace(/,/,'')
}
