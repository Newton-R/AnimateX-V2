import axios from "axios";

export const getRepoData = async () => {
      const data = await axios.get("https://api.github.com/repos/Newton-r/animatex-v2")
      console.log(data.data)
      return data.data.stargazers_count

}